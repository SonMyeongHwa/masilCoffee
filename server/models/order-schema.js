const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        // orderDetails: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: "OrderDetail",
        //         required: true,
        //     }
        // ],
        orderDetail: [
            {
                name: String,
                options: String,
                price:Number
            }
        ],
        date: {
            type: Date,
            default: Date.now,
        },
        status: {
            type: String,
            enum: ["주문취소", "주문완료", "제조완료"],
        },
        totalprice: {
            type: Number,
            required: true,
        },
        nickname: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
v

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;