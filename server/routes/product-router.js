const express = require("express");
const ProductRouter = express.Router();
const ProductService = require("../services/product-service");
const asyncHandler = require("../middlewares/async-handler");
const ResponseHandler = require("../middlewares/res-handler");
const imageUploader = require("../middlewares/s3-handler");
const JwtMiddleware = require("../middlewares/jwt-handler");

// single("여기이름이랑") Key 값이 일치해야함
// posturl : http://localhost:5000/test/image?directory=product
// /test/image 는 라우터 호출하는 주소,
// ? 뒤부터는 directory 는 aws 에 저장되는 폴더
// product는 그 폴더명

// 모든 제품 검색 (pagination)
ProductRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const { currentPage, pageSize } = req.query;
    const products = await ProductService.getAllProducts(currentPage, pageSize);
    ResponseHandler.respondWithSuccess(res, products);
  })
);

// 모든 제품 검색 (pagination x), 메인페이지용 (redux 사용)
ProductRouter.get(
  "/main",
  asyncHandler(async (req, res) => {
    const products = await ProductService.getAllProductsNoPagination();
    ResponseHandler.respondWithSuccess(res, products);
  })
);

// 카테고리 별 제품 검색 (pagination)
ProductRouter.get(
  "/:category",
  asyncHandler(async (req, res) => {
    const { currentPage, pageSize } = req.query;
    const { category } = req.params;
    const products = await ProductService.getProductsByCategory(category, currentPage, pageSize);
    ResponseHandler.respondWithSuccess(res, products);
  })
);

// 카테고리 별 제품 검색 (pagination x)
ProductRouter.get(
  "/categories/:category",
  asyncHandler(async (req, res) => {
    const { category } = req.params;
    const products = await ProductService.getProductsByCategoryNoPagination(category);
    ResponseHandler.respondWithSuccess(res, products);
  })
);

// 제품 검색 by productid
ProductRouter.get(
  "/:productId",
  asyncHandler(async (req, res) => {
    const productId = req.params.productId;
    const product = await ProductService.getProductById(productId);
    if (!product) {
      return ResponseHandler.respondWithNotfound(res);
    }
    ResponseHandler.respondWithSuccess(res, product);
  })
);

// 제품 생성
ProductRouter.post(
  "/",
  JwtMiddleware.checkToken,
  JwtMiddleware.checkAdmin,
  imageUploader.single("file"),
  asyncHandler(async (req, res) => {
    try {
      const productData = req.body;
      if (!req.file) {
        return res.status(400).send("이미지를 업로드해주세요.");
      }
      const imageURL = req.file.location;
      const newProduct = await ProductService.createProduct(productData, imageURL);
      ResponseHandler.respondWithSuccess(res, newProduct);
    } catch (error) {
      console.error(error);
      ResponseHandler.respondWithError(res, "제품 생성에 실패했습니다.");
    }
  })
);

// 제품 정보 수정 by productid
ProductRouter.put(
  "/:productId",
  JwtMiddleware.checkToken,
  JwtMiddleware.checkAdmin,
  imageUploader.single("file"),
  asyncHandler(async (req, res) => {
    const productId = req.params.productId;
    const productData = req.body;
    if (req.file) {
      productData.image_url = req.file.location;
    }
    const updatedProduct = await ProductService.updateProduct(productId, productData);
    if (!updatedProduct) {
      return ResponseHandler.respondWithNotFound(res, "Product not found");
    }

    ResponseHandler.respondWithSuccess(res, updatedProduct);
  })
);

// 제품 삭제 by productid
ProductRouter.delete(
  "/:productId",
  JwtMiddleware.checkToken,
  JwtMiddleware.checkAdmin,
  asyncHandler(async (req, res) => {
    const productId = req.params.productId;
    const deletedProduct = await ProductService.deleteProduct(productId);
    if (!deletedProduct) {
      return ResponseHandler.respondWithNotFound(res);
    }
    ResponseHandler.respondWithSuccess(res, deletedProduct);
  })
);

module.exports = ProductRouter;
