import actionTypes from "../constants";

export const productsFetchStart = (payload) => {
  return { type: actionTypes.PRODUCTS_FETCH_START, payload };
};

export const productsFetchSuccess = (payload) => {
  return { type: actionTypes.PRODUCTS_FETCH_SUCCESS, payload };
};

export const productsFetchError = (payload) => {
  return { type: actionTypes.PRODUCTS_FETCH_ERROR, payload };
};

export const productsDeleteOne = (payload) => {
  return { type: actionTypes.PRODUCTS_DETELE_ONE, payload };
};

export const productsDeleteOneSuccess = (payload) => {
  return { type: actionTypes.PRODUCTS_DETELE_ONE_SUCCESS, payload };
};

export const productsDeleteOneError = (payload) => {
  return { type: actionTypes.PRODUCTS_DETELE_ONE_ERROR, payload };
};

export const productsAdd = (payload) => {
  return { type: actionTypes.PRODUCTS_ADD, payload };
};

export const productsAddSuccess = (payload) => {
  return { type: actionTypes.PRODUCTS_ADD_SUCCESS, payload };
};

export const productsAddError = (payload) => {
  return { type: actionTypes.PRODUCTS_ADD_ERROR, payload };
};

export const productsUpdate = (payload) => {
  console.log("Экшен");
  return { type: actionTypes.PRODUCTS_UPDATE, payload };
};

export const productsUpdateSuccess = (payload) => {
  return { type: actionTypes.PRODUCTS_UPDATE_SUCCESS, payload };
};

export const productsUpdateError = (payload) => {
  return { type: actionTypes.PRODUCTS_UPDATE_ERROR, payload };
};
