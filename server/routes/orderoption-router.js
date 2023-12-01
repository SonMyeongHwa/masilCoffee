const express = require("express");
const OrderOptionRouter = express.Router();
const OrderOptionService = require("../services/orderoption-service");
const asyncHandler = require("../middlewares/async-handler");
const ResponseHandler = require("../middlewares/res-handler");
const JwtMiddleware = require("../middlewares/jwt-handler");

// 모든 Order Option 검색
OrderOptionRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const orderOptions = await OrderOptionService.getAllOrderOptions();
    ResponseHandler.respondWithSuccess(res, orderOptions);
  })
);

// // 특정 Order Option 검색
// OrderOptionRouter.get(
//   '/:orderOptionId',
//   asyncHandler(async (req, res) => {
//     const orderOptionId = req.params.orderOptionId;
//     const orderOption = await OrderOptionService.getOrderOptionById(orderOptionId);
//     if (!orderOption) {
//       return ResponseHandler.respondWithNotFound(res, 'Order option not found');
//     }
//     ResponseHandler.respondWithSuccess(res, orderOption);
//   })
// );

// Order Option 생성
OrderOptionRouter.post(
  "/",
  JwtMiddleware.checkToken,
  JwtMiddleware.checkAdmin,
  asyncHandler(async (req, res) => {
    const orderOptionData = req.body;
    const newOrderOption = await OrderOptionService.createOrderOption(
      orderOptionData
    );
    ResponseHandler.respondWithSuccess(res, newOrderOption);
  })
);

// Order Option 수정
OrderOptionRouter.put(
  "/:orderOptionId",
  JwtMiddleware.checkToken,
  JwtMiddleware.checkAdmin,
  asyncHandler(async (req, res) => {
    const orderOptionId = req.params.orderOptionId;
    const updatedData = req.body;
    const updatedOrderOption = await OrderOptionService.updateOrderOption(
      orderOptionId,
      updatedData
    );
    if (!updatedOrderOption) {
      return ResponseHandler.respondWithNotFound(res, "Order option not found");
    }
    ResponseHandler.respondWithSuccess(res, updatedOrderOption);
  })
);

// Order Option 삭제
OrderOptionRouter.delete(
  "/:orderOptionId",
  JwtMiddleware.checkToken,
  JwtMiddleware.checkAdmin,
  asyncHandler(async (req, res) => {
    const orderOptionId = req.params.orderOptionId;
    const deletedOrderOption = await OrderOptionService.deleteOrderOption(
      orderOptionId
    );
    if (!deletedOrderOption) {
      return ResponseHandler.respondWithNotFound(res, "Order option not found");
    }
    ResponseHandler.respondWithSuccess(res, deletedOrderOption);
  })
);

module.exports = OrderOptionRouter;
