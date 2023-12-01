const Order = require("../models/order-schema");

class OrderService {
  // 주문 생성
  static async createOrder(orderData) {
    try {
      const newOrder = new Order(orderData);
      const savedOrder = await newOrder.save();
      return savedOrder;
    } catch (error) {
      throw error;
    }
  }

  static async getAllOrders() {
    try {
      const orders = await Order.find();
      return orders;
    } catch (error) {
      throw error;
    }
  }

  static async getOrderById(userId) {
    try {
      const Orders = await Order.find({ user: userId });
      return Orders;
    } catch (error) {
      throw error;
    }
  }

  static async updateOrder(orderId, orderData) {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(orderId, { $set: orderData }, { new: true });
      return updatedOrder;
    } catch (error) {
      throw error;
    }
  }

  static async deleteOrder(orderId) {
    try {
      const deletedOrder = await Order.findByIdAndDelete(orderId);
      return deletedOrder;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderService;
