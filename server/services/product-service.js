const Product = require("../models/product-schema");
const paginate = require("../utils/pagination");

class ProductService {

  // 제품 생성
  static async createProduct(productData, imageURL) {
    try {
      productData.image_url = imageURL;
      const newProduct = new Product(productData);
      const savedProduct = await newProduct.save();
      return savedProduct;
    } catch (error) {
      throw error;
    }
  }

  // 모든 제품 검색 (pagination)
  static async getAllProducts(currentPage, pageSize) {
    try {
      const totalItems = await Product.countDocuments();

      const products = await Product.find()
        .sort({ createdAt: -1 })
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize);

      const paginatedResult = paginate(products, currentPage, pageSize, totalItems);
      return paginatedResult;
    } catch (error) {
      throw error;
    }
  }

  // 모든 제품 검색 (페이지네이션 x)
  static async getAllProductsNoPagination() {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      throw error;
    }
  }

  // 카테고리별 제품 검색 (페이지네이션 o)
  static async getProductsByCategory(category, currentPage, pageSize) {
    try {
      const query = { category };
      const totalItems = await Product.countDocuments(query);

      const products = await Product.find(query)
        .sort({ createdAt: -1 })
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize);

      const paginatedResult = paginate(products, currentPage, pageSize, totalItems);
      return paginatedResult;
    } catch (error) {
      throw error;
    }
  }

  // 카테고리별 제품 검색 (페이지네이션 x)
  static async getProductsByCategoryNoPagination(category) {
    try {
      const products = await Product.find({ category });
      return products;
    } catch (error) {
      throw error;
    }
  }

  static async getProductById(productId) {
    try {
      const product = await Product.findById(productId);
      return product;
    } catch (error) {
      throw error;
    }
  }

  static async updateProduct(productId, productData) {
    try {
      if (productData.image_url) {
        const product = await Product.findById(productId);
        if (!product) {
          return null;
        }
        product.image_url = productData.image_url;
        await product.save();
      }
      const updatedProduct = await Product.findByIdAndUpdate(productId, { $set: productData }, { new: true });
      return updatedProduct;
    } catch (error) {
      throw error;
    }
  }

  static async deleteProduct(productId) {
    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);
      return deletedProduct;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductService;
