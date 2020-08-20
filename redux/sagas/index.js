import { fork } from "redux-saga/effects";
import {
  saga as productSaga,
  deleteOne,
  addNewProduct,
  updateOneProduct,
} from "./products";

export default function* rootSaga() {
  yield fork(productSaga);
  yield fork(deleteOne);
  yield fork(addNewProduct);
  yield fork(updateOneProduct);
}
