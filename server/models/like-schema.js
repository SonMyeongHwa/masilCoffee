const mongoose = require('mongoose');

const { Schema } = mongoose;

const LikeSchema = new Schema({
    board: {
        type: Schema.Types.ObjectId,
        ref: 'board',
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
},
    {
        timestamps: true,
        versionKey: false,
    }
);

const Like = mongoose.model("Like", LikeSchema);

module.exports = Like;

