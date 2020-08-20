import actionTypes from "../constants";

const initialState = {
  products: null,
};

export const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.PRODUCTS_FETCH_SUCCESS: {
      return { ...state, products: payload.products, loader: false };
    }
    case actionTypes.PRODUCTS_FETCH_START: {
      return { ...state, loader: true };
    }
    case actionTypes.PRODUCTS_FETCH_ERROR: {
      return { ...state, error: payload.error, loader: false };
    }
    case actionTypes.PRODUCTS_DETELE_ONE: {
      return { ...state, loader: true };
    }
    case actionTypes.PRODUCTS_DETELE_ONE_SUCCESS: {
      return {
        ...state,
        loader: false,
        products: state.products.filter((element, index) => {
          return element.id !== action.payload.deletedProductId;
        }),
      };
    }
    case actionTypes.PRODUCTS_DETELE_ONE_ERROR: {
      return { ...state, error: payload.error, loader: false };
    }

    case actionTypes.PRODUCTS_ADD_SUCCESS: {
      return {
        ...state,
        products: [...state.products, action.payload],
        loader: false,
      };
    }

    case actionTypes.PRODUCTS_UPDATE_ERROR: {
      return { ...state, error: payload.error, loader: false };
    }

    case actionTypes.PRODUCTS_UPDATE_SUCCESS: {
      console.log(action.payload, " +++++++++");
      return {
        ...state,
        products: [...state.products, action.payload],
        loader: false,
      };
    }

    default:
      return state;
  }
};
