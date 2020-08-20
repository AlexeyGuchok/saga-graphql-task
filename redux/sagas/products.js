import ProductsService from "../../services/products";
import {
  call,
  put,
  takeEvery,
  select,
  all,
  take,
  takeLatest,
} from "redux-saga/effects";
import actionTypes from "../constants";
import {
  productsFetchSuccess,
  productsFetchError,
  productsDeleteOneSuccess,
  productsDeleteOneError,
  productsAddError,
  productsAddSuccess,
  productsUpdateSuccess,
  productsUpdateError,
} from "../actions/products";

function* getProducts(action) {
  try {
    const data = yield call(ProductsService.getProductsQuery);
    yield put(productsFetchSuccess({ products: data.data.products }));
  } catch (error) {
    yield put(productsFetchError(error));
    console.log(error);
  }
}

export function* saga() {
  yield all([takeLatest(actionTypes.PRODUCTS_FETCH_START, getProducts)]);
}

function* deleteOneProduct(action) {
  try {
    const data = yield call(ProductsService.deleteProductQuery, action.payload);
    if (data.status == "200") {
      yield put(productsDeleteOneSuccess({ deletedProductId: action.payload }));
    }
  } catch (error) {
    yield put(productsDeleteOneError(error));
    console.log(error);
  }
}

export function* deleteOne() {
  yield all([takeLatest(actionTypes.PRODUCTS_DETELE_ONE, deleteOneProduct)]);
}

function* addProduct(action) {
  try {
    const data = yield call(ProductsService.addProductQuery, action.payload);
    console.log(data);
    if (data.status == "200") {
      yield put(productsAddSuccess(data.data.data.addProduct));
    }
  } catch (error) {
    yield put(productsAddError(error));
    console.log(error);
  }
}

export function* addNewProduct() {
  yield all([takeLatest(actionTypes.PRODUCTS_ADD, addProduct)]);
}

function* updateProduct(action) {
  try {
    const data = yield call(ProductsService.updatePoductQuery, action.payload);
    console.log(data);
    if (data.status == "200") {
      yield put(productsUpdateSuccess(data.data.data.updateProduct));
    }
  } catch (error) {
    yield put(productsUpdateError(error));
    console.log(error);
  }
}

export function* updateOneProduct() {
  yield all([takeLatest(actionTypes.PRODUCTS_UPDATE, updateProduct)]);
}
