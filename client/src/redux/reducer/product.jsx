import { PRODUCT_TYPE } from "../action/_types";

const initialState = {
  products: [],
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_TYPE.GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case PRODUCT_TYPE.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case PRODUCT_TYPE.UPDATE_PRODUCTS:
      const updatedProduct = action.payload;
      const updatedProducts = state.products.map((product) => {
        return product.id === updatedProduct.id ? updatedProduct : product;
      });

      return {
        ...state,
        products: updatedProducts,
      };
    case PRODUCT_TYPE.DELETE_PRODUCT:
      const deletedProductId = action.payload;
      const filteredProducts = state.products.filter((product) => product.id !== deletedProductId);

      return {
        ...state,
        products: filteredProducts,
      };
    default:
      return state;
  }
};

export default product;
