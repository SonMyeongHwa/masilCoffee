const express = require("express");
const OrderRouter = express.Router();
const OrderService = require("../services/order-service");
const asyncHandler = require("../middlewares/async-handler");
const ResponseHandler = require("../middlewares/res-handler");
const JwtMiddleware = require("../middlewares/jwt-handler");

// 주문 생성
OrderRouter.post(
  "/",
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    try {
      const userIdFromToken = req.tokenData._id;
      const ordered = req.body;
      const orderData = { ...ordered, user: userIdFromToken };
      const newOrder = await OrderService.createOrder(orderData);
      ResponseHandler.respondWithSuccess(res, newOrder);
    } catch (error) {
      console.error(error);
      ResponseHandler.respondWithError(res, "주문 생성에 실패했습니다.");
    }
  })
);

// 모든 주문 검색
OrderRouter.get(
  "/admin",
  JwtMiddleware.checkToken,
  JwtMiddleware.checkAdmin,
  asyncHandler(async (req, res) => {
    try {
      const orders = await OrderService.getAllOrders();
      ResponseHandler.respondWithSuccess(res, orders);
    } catch (err) {
      ResponseHandler.respondWithError(
        res,
        500,
        "주문 정보를 가져오는 중 오류가 발생했습니다."
      );
    }
  })
);

// 주문 검색 by userId
OrderRouter.get(
  "/",
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    try {
      const userIdFromToken = req.tokenData._id;
      const order = await OrderService.getOrderById(userIdFromToken);
      ResponseHandler.respondWithSuccess(res, order);
    } catch (err) {
      ResponseHandler.respondWithError(
        res,
        500,
        "사용자의 주문 정보를 가져오는 중 오류가 발생했습니다."
      );
    }
  })
);

// 주문 정보 수정 by orderId
OrderRouter.put(
  "/:orderId",
  JwtMiddleware.checkToken,
  JwtMiddleware.checkAdmin,
  asyncHandler(async (req, res) => {
    try {
      const orderId = req.params.orderId;
      const orderData = req.body;
      const updatedOrder = await OrderService.updateOrder(orderId, orderData);
      if (!updatedOrder) {
        return ResponseHandler.respondWithNotFound(res, "Order not found");
      }
      ResponseHandler.respondWithSuccess(res, updatedOrder);
    } catch (err) {
      ResponseHandler.respondWithError(
        res,
        500,
        "주문 정보를 수정하는 중 오류가 발생했습니다."
      );
    }
  })
);

// 주문 삭제 by orderId
OrderRouter.delete(
  "/:orderId",
  JwtMiddleware.checkToken,
  JwtMiddleware.checkAdmin,
  asyncHandler(async (req, res) => {
    try {
      const orderId = req.params.orderId;
      const deletedOrder = await OrderService.deleteOrder(orderId);
      if (!deletedOrder) {
        return ResponseHandler.respondWithNotFound(res);
      }
      ResponseHandler.respondWithSuccess(res, deletedOrder);
    } catch (err) {
      ResponseHandler.respondWithError(
        res,
        500,
        "주문 정보를 삭제하던 중 오류가 발생했습니다."
      );
    }
  })
);

module.exports = OrderRouter;
