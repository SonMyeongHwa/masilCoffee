const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderDetailSchema = new Schema(
    {
        shot: {
            type: Number,
            required: true,
        },
        drizzle: [{
            type: String,
            required: false,
            default: "없음",
        }],
        iceAmount: {
            type: String,
            enum: ["없음", "조금", "보통", "많이"],
            default: "없음",
        },
        whipping: {
            type: String,
            enum: ["없음", "조금", "보통", "많이"],
            default: "없음",
        },
        syrup: [{
            type: String,
            required: false,
            default: "없음",
        }],
        milk: [{
            type: String,
            required: false,
        }]
    },
    {
        timestamps: true,
    }
);

const OrderDetail = mongoose.model('OrderDetail', OrderDetailSchema);

module.exports = OrderDetail;