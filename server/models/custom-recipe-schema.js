const mongoose = require('mongoose');

const { Schema } = mongoose;

const CustomRecipeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    option: {
      type: String,
      required: true,
    },
    order: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CustomRecipe = mongoose.model('CustomRecipe', CustomRecipeSchema);

module.exports = CustomRecipe;
