import { PRODUCT_TYPE } from "./_types";

export const actionGetAllProducts = (products) => {
  return {
    type: PRODUCT_TYPE.GET_ALL_PRODUCTS,
    payload: products,
  };
};

export const actionGetCategoryProducts = (products) => {
  return {
    type: PRODUCT_TYPE.GET_CATEGORY_PRODUCTS,
    payload: products,
  };
};

export const actionCreateProduct = (newProduct) => {
  return {
    type: PRODUCT_TYPE.ADD_PRODUCT,
    payload: newProduct,
  };
};

export const actionUpdateProduct = (product) => {
  return {
    type: PRODUCT_TYPE.UPDATE_PRODUCTS,
    payload: product,
  };
};

export const actionDeleteProduct = (productId) => {
  return {
    type: PRODUCT_TYPE.DELETE_PRODUCT,
    payload: productId,
  };
};
