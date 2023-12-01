import { PRODUCT_TYPE } from "../action/_types";

const initialState = {
  products: [],
  tableData: [],
};

const formatProductForTable = (product) => [
  product._id,
  product.image_url,
  product.category,
  product.name,
  product.size,
  product.temp,
  product.price,
];

const product = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_TYPE.GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        tableData: action.payload.map(formatProductForTable),
      };
    case PRODUCT_TYPE.GET_CATEGORY_PRODUCTS:
      return {
        ...state,
        tableData: action.payload.map(formatProductForTable),
      };
    case PRODUCT_TYPE.ADD_PRODUCT:
      const newProduct = [...state.products, action.payload];
      return {
        ...state,
        products: newProduct,
        tableData: newProduct.map(formatProductForTable),
      };
    case PRODUCT_TYPE.UPDATE_PRODUCTS:
      const updatedProduct = action.payload;
      const updatedProducts = state.products.map((product) => (product._id === updatedProduct._id ? updatedProduct : product));
      return {
        ...state,
        products: updatedProducts,
        tableData: updatedProducts.map(formatProductForTable),
      };
    case PRODUCT_TYPE.DELETE_PRODUCT:
      const deletedProductId = action.payload;
      const filteredProducts = state.products.filter((product) => product._id !== deletedProductId);
      return {
        ...state,
        products: filteredProducts,
        tableData: filteredProducts.map(formatProductForTable),
      };
    default:
      return state;
  }
};

export default product;
