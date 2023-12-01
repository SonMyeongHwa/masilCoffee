const OrderOption = require("../models/orderoption-schema");

class OrderOptionService {
  async getAllOrderOptions() {
    try {
      return await OrderOption.find();
    } catch (error) {
      throw error;
    }
  }

  async getOrderOptionById(orderOptionId) {
    try {
      return await OrderOption.findById(orderOptionId);
    } catch (error) {
      throw error;
    }
  }

  async createOrderOption(orderOptionData) {
    const orderOption = new OrderOption(orderOptionData);
    try {
      return await orderOption.save();
    } catch (error) {
      throw error;
    }
  }

  async updateOrderOption(orderOptionId, updatedData) {
    try {
      const orderOption = await OrderOption.findById(orderOptionId);
      if (!orderOption) {
        return null;
      }
      Object.keys(updatedData).forEach((option) => {
        // Object.keys(updatedData) : shot, drizzle 등등
        // forEach 각각 키 반복?
        orderOption[option] = updatedData[option];
        // 키 값에 해당하는 req.body value 입력!
      });
      const updatedOrderOption = await orderOption.save();
      return updatedOrderOption;
    } catch (error) {
      throw error;
    }
  }

  async deleteOrderOption(orderOptionId) {
    try {
      const deletedOrderOption = await OrderOption.findByIdAndDelete(
        orderOptionId
      );
      if (!deletedOrderOption) {
        throw new Error("Order option not found");
      }
      return deletedOrderOption;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new OrderOptionService();
