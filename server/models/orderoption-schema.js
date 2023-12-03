const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderOptionSchema = new Schema(
    {
        shot: {
            type: Number,
            required: true,
        },
        drizzle: [{
            type: String,
            required: false,
        }],
        iceAmount: {
            type: String,
            enum: ["조금", "보통", "많이"],
            default: "보통",
        },
        whipping: {
            type: String,
            enum: ["조금", "보통", "많이"],
            default: "보통",
        },
        syrup: [{
            type: String,
            required: false,
        }],
        milk: [{
            type: String,
            required: false,
        }],
    },
    {
        timestamps: true,
    }
);

const OrderOption = mongoose.model('OrderOption', OrderOptionSchema);

module.exports = OrderOption;
