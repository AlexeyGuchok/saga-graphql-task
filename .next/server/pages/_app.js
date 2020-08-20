module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux */ "./redux/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_7___default.a({
  uri: "http://localhost:4001/graphql"
});

class WrappedApp extends next_app__WEBPACK_IMPORTED_MODULE_5___default.a {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      loaded: false
    });
  }

  componentDidMount() {
    this.setState({
      loaded: true
    });
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store
    }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_6__["ApolloProvider"], {
      client: client
    }, __jsx("div", {
      className: this.state.loaded ? "full-height" : "load"
    }, __jsx(Component, pageProps))));
  }

}

_defineProperty(WrappedApp, "getInitialProps", async ({
  Component,
  ctx
}) => {
  const pageProps = _objectSpread({}, Component.getInitialProps ? await Component.getInitialProps(ctx) : {});

  return {
    pageProps
  };
});

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_redux__WEBPACK_IMPORTED_MODULE_2__["makeStore"])(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(WrappedApp))); // export default wrapper.withRedux(WrappedApp);

/***/ }),

/***/ "./redux/actions/products.js":
/*!***********************************!*\
  !*** ./redux/actions/products.js ***!
  \***********************************/
/*! exports provided: productsFetchStart, productsFetchSuccess, productsFetchError, productsDeleteOne, productsDeleteOneSuccess, productsDeleteOneError, productsAdd, productsAddSuccess, productsAddError, productsUpdate, productsUpdateSuccess, productsUpdateError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsFetchStart", function() { return productsFetchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsFetchSuccess", function() { return productsFetchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsFetchError", function() { return productsFetchError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsDeleteOne", function() { return productsDeleteOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsDeleteOneSuccess", function() { return productsDeleteOneSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsDeleteOneError", function() { return productsDeleteOneError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsAdd", function() { return productsAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsAddSuccess", function() { return productsAddSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsAddError", function() { return productsAddError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsUpdate", function() { return productsUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsUpdateSuccess", function() { return productsUpdateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsUpdateError", function() { return productsUpdateError; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./redux/constants.js");

const productsFetchStart = payload => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_FETCH_START,
    payload
  };
};
const productsFetchSuccess = payload => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_FETCH_SUCCESS,
    payload
  };
};
const productsFetchError = payload => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_FETCH_ERROR,
    payload
  };
};
const productsDeleteOne = payload => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_DETELE_ONE,
    payload
  };
};
const productsDeleteOneSuccess = payload => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_DETELE_ONE_SUCCESS,
    payload
  };
};
const productsDeleteOneError = payload => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_DETELE_ONE_ERROR,
    payload
  };
};
const productsAdd = payload => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_ADD,
    payload
  };
};
const productsAddSuccess = payload => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_ADD_SUCCESS,
    payload
  };
};
const productsAddError = payload => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_ADD_ERROR,
    payload
  };
};
const productsUpdate = payload => {
  console.log("Экшен");
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_UPDATE,
    payload
  };
};
const productsUpdateSuccess = payload => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_UPDATE_SUCCESS,
    payload
  };
};
const productsUpdateError = payload => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_UPDATE_ERROR,
    payload
  };
};

/***/ }),

/***/ "./redux/constants.js":
/*!****************************!*\
  !*** ./redux/constants.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  PRODUCTS_FETCH_START: "PRODUCTS_FETCH_START",
  PRODUCTS_FETCH_SUCCESS: "PRODUCTS_FETCH_SUCCESS",
  PRODUCTS_FETCH_ERROR: "PRODUCTS_FETCH_ERROR",
  PRODUCTS_DETELE_ONE: "PRODUCTS_DETELE_ONE",
  PRODUCTS_DETELE_ONE_SUCCESS: "PRODUCTS_DETELE_SUCCESS",
  PRODUCTS_DETELE_ONE_ERROR: "PRODUCTS_DETELE_ERROR",
  PRODUCTS_ADD: "PRODUCTS_ADD",
  PRODUCTS_ADD_SUCCESS: "PRODUCTS_ADD_SUCCESS",
  PRODUCTS_ADD_ERROR: "PRODUCTS_ADD_ERROR",
  PRODUCTS_UPDATE: "PRODUCTS_UPDATE",
  PRODUCTS_UPDATE_SUCCESS: "PRODUCTS_UPDATE_SUCCESS",
  PRODUCTS_UPDATE_ERROR: "PRODUCTS_UPDATE_ERROR"
});

/***/ }),

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/*! exports provided: makeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas */ "./redux/sagas/index.js");





const bindMiddleware = middleware => {
  if (true) {
    // eslint-disable-next-line global-require,import/no-extraneous-dependencies
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

const makeStore = (preloadedState, ctx) => {
  const {
    isServer,
    req = null
  } = ctx;
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["rootReducer"], preloadedState, bindMiddleware([sagaMiddleware]));

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_3__["default"]);
  }

  return store;
};

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsReducer */ "./redux/reducers/productsReducer.js");


const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  products: _productsReducer__WEBPACK_IMPORTED_MODULE_1__["productsReducer"]
});

/***/ }),

/***/ "./redux/reducers/productsReducer.js":
/*!*******************************************!*\
  !*** ./redux/reducers/productsReducer.js ***!
  \*******************************************/
/*! exports provided: productsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsReducer", function() { return productsReducer; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./redux/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  products: null
};
const productsReducer = (state = initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_FETCH_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          products: payload.products,
          loader: false
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_FETCH_START:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: true
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_FETCH_ERROR:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: payload.error,
          loader: false
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_DETELE_ONE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: true
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_DETELE_ONE_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: false,
          products: state.products.filter((element, index) => {
            return element.id !== action.payload.deletedProductId;
          })
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_DETELE_ONE_ERROR:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: payload.error,
          loader: false
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_ADD_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          products: [...state.products, action.payload],
          loader: false
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_UPDATE_ERROR:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: payload.error,
          loader: false
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PRODUCTS_UPDATE_SUCCESS:
      {
        console.log(action.payload, " +++++++++");
        return _objectSpread(_objectSpread({}, state), {}, {
          products: [...state.products, action.payload],
          loader: false
        });
      }

    default:
      return state;
  }
};

/***/ }),

/***/ "./redux/sagas/index.js":
/*!******************************!*\
  !*** ./redux/sagas/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products */ "./redux/sagas/products.js");


function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_products__WEBPACK_IMPORTED_MODULE_1__["saga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_products__WEBPACK_IMPORTED_MODULE_1__["deleteOne"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_products__WEBPACK_IMPORTED_MODULE_1__["addNewProduct"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_products__WEBPACK_IMPORTED_MODULE_1__["updateOneProduct"]);
}

/***/ }),

/***/ "./redux/sagas/products.js":
/*!*********************************!*\
  !*** ./redux/sagas/products.js ***!
  \*********************************/
/*! exports provided: saga, deleteOne, addNewProduct, updateOneProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saga", function() { return saga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOne", function() { return deleteOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewProduct", function() { return addNewProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOneProduct", function() { return updateOneProduct; });
/* harmony import */ var _services_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/products */ "./services/products.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./redux/constants.js");
/* harmony import */ var _actions_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/products */ "./redux/actions/products.js");





function* getProducts(action) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services_products__WEBPACK_IMPORTED_MODULE_0__["default"].getProductsQuery);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_products__WEBPACK_IMPORTED_MODULE_3__["productsFetchSuccess"])({
      products: data.data.products
    }));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_products__WEBPACK_IMPORTED_MODULE_3__["productsFetchError"])(error));
    console.log(error);
  }
}

function* saga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_2__["default"].PRODUCTS_FETCH_START, getProducts)]);
}

function* deleteOneProduct(action) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services_products__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProductQuery, action.payload);

    if (data.status == "200") {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_products__WEBPACK_IMPORTED_MODULE_3__["productsDeleteOneSuccess"])({
        deletedProductId: action.payload
      }));
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_products__WEBPACK_IMPORTED_MODULE_3__["productsDeleteOneError"])(error));
    console.log(error);
  }
}

function* deleteOne() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_2__["default"].PRODUCTS_DETELE_ONE, deleteOneProduct)]);
}

function* addProduct(action) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services_products__WEBPACK_IMPORTED_MODULE_0__["default"].addProductQuery, action.payload);
    console.log(data);

    if (data.status == "200") {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_products__WEBPACK_IMPORTED_MODULE_3__["productsAddSuccess"])(data.data.data.addProduct));
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_products__WEBPACK_IMPORTED_MODULE_3__["productsAddError"])(error));
    console.log(error);
  }
}

function* addNewProduct() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_2__["default"].PRODUCTS_ADD, addProduct)]);
}

function* updateProduct(action) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services_products__WEBPACK_IMPORTED_MODULE_0__["default"].updatePoductQuery, action.payload);
    console.log(data);

    if (data.status == "200") {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_products__WEBPACK_IMPORTED_MODULE_3__["productsUpdateSuccess"])(data.data.data.updateProduct));
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_products__WEBPACK_IMPORTED_MODULE_3__["productsUpdateError"])(error));
    console.log(error);
  }
}

function* updateOneProduct() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_2__["default"].PRODUCTS_UPDATE, updateProduct)]);
}

/***/ }),

/***/ "./services/products.js":
/*!******************************!*\
  !*** ./services/products.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const graphQLUrl = "/graphql";

class ProductsService {
  constructor(url) {
    _defineProperty(this, "getProductsQuery", async () => {
      const data = await this.sender.post("", {
        query: `{
            products {
              id
              model_name
              model_color
              model_category
              createdBy {
                id
                name
                age
              }
            }
          }`
      });
      return data.data;
    });

    _defineProperty(this, "deleteProductQuery", async id => {
      const name = "deleteProduct";
      const data = await this.sender.post("", {
        query: `
        mutation {
          ${name}(id: ${id}) {
            id
          }
      }
    `
      });
      return data;
    });

    _defineProperty(this, "addProductQuery", async userData => {
      const name = "addProduct";
      const data = await this.sender.post("", {
        query: `
        mutation {
          ${name}(
            name: "${userData.name}",
            category: "${userData.category}",
            color: "${userData.color}",
            createdBy: "${userData.createdBy}",
            ) {
            id
             model_name
             model_category
             model_color
             createdBy {
               id
               age
               name
             }
            }
      }
    `
      });
      console.log(data);
      return data;
    });

    _defineProperty(this, "updatePoductQuery", async userData => {
      const name = "updateProduct";
      const data = await this.sender.post("", {
        query: `
         mutation {
          ${name}(
      id: "${userData.id}",
      name: "${userData.name}",
      category: "${userData.category}",
      color: "${userData.color}",
      createdBy: "${userData.createdBy}",
    ) {
      model_name
      model_category
      model_color
      id
      createdBy {
        id
        age
        name
      }
    }
  }

    `
      });
      console.log(data, " +++++++");
      return data;
    });

    this.sender = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      baseURL: url,
      withCredentials: true
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new ProductsService(graphQLUrl));

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvcHJvZHVjdHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2FzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1ib29zdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJjb25zb2xlIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiY2xpZW50IiwiQXBvbGxvQ2xpZW50IiwidXJpIiwiV3JhcHBlZEFwcCIsImxvYWRlZCIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0U3RhdGUiLCJzdG9yZSIsInByb3BzIiwic3RhdGUiLCJjdHgiLCJ3aXRoUmVkdXgiLCJtYWtlU3RvcmUiLCJ3aXRoUmVkdXhTYWdhIiwicHJvZHVjdHNGZXRjaFN0YXJ0IiwicGF5bG9hZCIsInR5cGUiLCJhY3Rpb25UeXBlcyIsIlBST0RVQ1RTX0ZFVENIX1NUQVJUIiwicHJvZHVjdHNGZXRjaFN1Y2Nlc3MiLCJQUk9EVUNUU19GRVRDSF9TVUNDRVNTIiwicHJvZHVjdHNGZXRjaEVycm9yIiwiUFJPRFVDVFNfRkVUQ0hfRVJST1IiLCJwcm9kdWN0c0RlbGV0ZU9uZSIsIlBST0RVQ1RTX0RFVEVMRV9PTkUiLCJwcm9kdWN0c0RlbGV0ZU9uZVN1Y2Nlc3MiLCJQUk9EVUNUU19ERVRFTEVfT05FX1NVQ0NFU1MiLCJwcm9kdWN0c0RlbGV0ZU9uZUVycm9yIiwiUFJPRFVDVFNfREVURUxFX09ORV9FUlJPUiIsInByb2R1Y3RzQWRkIiwiUFJPRFVDVFNfQUREIiwicHJvZHVjdHNBZGRTdWNjZXNzIiwiUFJPRFVDVFNfQUREX1NVQ0NFU1MiLCJwcm9kdWN0c0FkZEVycm9yIiwiUFJPRFVDVFNfQUREX0VSUk9SIiwicHJvZHVjdHNVcGRhdGUiLCJsb2ciLCJQUk9EVUNUU19VUERBVEUiLCJwcm9kdWN0c1VwZGF0ZVN1Y2Nlc3MiLCJQUk9EVUNUU19VUERBVEVfU1VDQ0VTUyIsInByb2R1Y3RzVXBkYXRlRXJyb3IiLCJQUk9EVUNUU19VUERBVEVfRVJST1IiLCJiaW5kTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwicmVxdWlyZSIsImFwcGx5TWlkZGxld2FyZSIsInByZWxvYWRlZFN0YXRlIiwiaXNTZXJ2ZXIiLCJyZXEiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsInNhZ2FUYXNrIiwicnVuIiwicm9vdFNhZ2EiLCJjb21iaW5lUmVkdWNlcnMiLCJwcm9kdWN0cyIsInByb2R1Y3RzUmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImFjdGlvbiIsImxvYWRlciIsImVycm9yIiwiZmlsdGVyIiwiZWxlbWVudCIsImluZGV4IiwiaWQiLCJkZWxldGVkUHJvZHVjdElkIiwiZm9yayIsInByb2R1Y3RTYWdhIiwiZGVsZXRlT25lIiwiYWRkTmV3UHJvZHVjdCIsInVwZGF0ZU9uZVByb2R1Y3QiLCJnZXRQcm9kdWN0cyIsImRhdGEiLCJjYWxsIiwiUHJvZHVjdHNTZXJ2aWNlIiwiZ2V0UHJvZHVjdHNRdWVyeSIsInB1dCIsInNhZ2EiLCJhbGwiLCJ0YWtlTGF0ZXN0IiwiZGVsZXRlT25lUHJvZHVjdCIsImRlbGV0ZVByb2R1Y3RRdWVyeSIsInN0YXR1cyIsImFkZFByb2R1Y3QiLCJhZGRQcm9kdWN0UXVlcnkiLCJ1cGRhdGVQcm9kdWN0IiwidXBkYXRlUG9kdWN0UXVlcnkiLCJncmFwaFFMVXJsIiwiY29uc3RydWN0b3IiLCJzZW5kZXIiLCJwb3N0IiwicXVlcnkiLCJuYW1lIiwidXNlckRhdGEiLCJjYXRlZ29yeSIsImNvbG9yIiwiY3JlYXRlZEJ5IiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsK0Q7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNUM7O0FBQ0E7Ozs7QUFrQkE7Ozs7O0FBSUEsa0NBQWtDO0FBQUE7QUFBbEM7QUFBa0MsQ0FBbEMsRUFHeUM7QUFDdkMsUUFBTUEsU0FBUyxHQUFHLE1BQU0sMkNBQXhCLEdBQXdC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a0QsR0FBUixDQUFZdUMsSUFBWixFQUFrQixVQUFsQjtBQUNBLGFBQU9BLElBQVA7QUFDRCxLQWhHZ0I7O0FBQ2YsU0FBS2lCLE1BQUwsR0FBY1EsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQ3pCQyxhQUFPLEVBQUUzSCxHQURnQjtBQUV6QjRILHFCQUFlLEVBQUU7QUFGUSxLQUFiLENBQWQ7QUFJRDs7QUFObUI7O0FBb0dQLG1FQUFJMUIsZUFBSixDQUFvQmEsVUFBcEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbiAgTmV4dFdlYlZpdGFsc01ldHJpYyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHsgTmV4dFdlYlZpdGFsc01ldHJpYyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IG1ha2VTdG9yZSB9IGZyb20gXCIuLi9yZWR1eFwiO1xyXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHdpdGhSZWR1eFNhZ2EgZnJvbSBcIm5leHQtcmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcclxuaW1wb3J0IEFwb2xsb0NsaWVudCBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICB1cmk6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAxL2dyYXBocWxcIixcclxufSk7XHJcblxyXG5jbGFzcyBXcmFwcGVkQXBwIGV4dGVuZHMgQXBwIHtcclxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgQ29tcG9uZW50LCBjdHggfSkgPT4ge1xyXG4gICAgY29uc3QgcGFnZVByb3BzID0ge1xyXG4gICAgICAuLi4oQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xyXG4gICAgICAgID8gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXHJcbiAgICAgICAgOiB7fSksXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhZ2VQcm9wcyxcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBsb2FkZWQ6IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxvYWRlZDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmxvYWRlZCA/IFwiZnVsbC1oZWlnaHRcIiA6IFwibG9hZFwifT5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgobWFrZVN0b3JlKSh3aXRoUmVkdXhTYWdhKFdyYXBwZWRBcHApKTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KFdyYXBwZWRBcHApO1xyXG4iLCJpbXBvcnQgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzRmV0Y2hTdGFydCA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUFJPRFVDVFNfRkVUQ0hfU1RBUlQsIHBheWxvYWQgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c0ZldGNoU3VjY2VzcyA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUFJPRFVDVFNfRkVUQ0hfU1VDQ0VTUywgcGF5bG9hZCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzRmV0Y2hFcnJvciA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUFJPRFVDVFNfRkVUQ0hfRVJST1IsIHBheWxvYWQgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c0RlbGV0ZU9uZSA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUFJPRFVDVFNfREVURUxFX09ORSwgcGF5bG9hZCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzRGVsZXRlT25lU3VjY2VzcyA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUFJPRFVDVFNfREVURUxFX09ORV9TVUNDRVNTLCBwYXlsb2FkIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNEZWxldGVPbmVFcnJvciA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUFJPRFVDVFNfREVURUxFX09ORV9FUlJPUiwgcGF5bG9hZCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzQWRkID0gKHBheWxvYWQpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5QUk9EVUNUU19BREQsIHBheWxvYWQgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c0FkZFN1Y2Nlc3MgPSAocGF5bG9hZCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlBST0RVQ1RTX0FERF9TVUNDRVNTLCBwYXlsb2FkIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNBZGRFcnJvciA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUFJPRFVDVFNfQUREX0VSUk9SLCBwYXlsb2FkIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNVcGRhdGUgPSAocGF5bG9hZCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwi0K3QutGI0LXQvVwiKTtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5QUk9EVUNUU19VUERBVEUsIHBheWxvYWQgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c1VwZGF0ZVN1Y2Nlc3MgPSAocGF5bG9hZCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlBST0RVQ1RTX1VQREFURV9TVUNDRVNTLCBwYXlsb2FkIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNVcGRhdGVFcnJvciA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUFJPRFVDVFNfVVBEQVRFX0VSUk9SLCBwYXlsb2FkIH07XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBQUk9EVUNUU19GRVRDSF9TVEFSVDogXCJQUk9EVUNUU19GRVRDSF9TVEFSVFwiLFxyXG4gIFBST0RVQ1RTX0ZFVENIX1NVQ0NFU1M6IFwiUFJPRFVDVFNfRkVUQ0hfU1VDQ0VTU1wiLFxyXG4gIFBST0RVQ1RTX0ZFVENIX0VSUk9SOiBcIlBST0RVQ1RTX0ZFVENIX0VSUk9SXCIsXHJcbiAgUFJPRFVDVFNfREVURUxFX09ORTogXCJQUk9EVUNUU19ERVRFTEVfT05FXCIsXHJcbiAgUFJPRFVDVFNfREVURUxFX09ORV9TVUNDRVNTOiBcIlBST0RVQ1RTX0RFVEVMRV9TVUNDRVNTXCIsXHJcbiAgUFJPRFVDVFNfREVURUxFX09ORV9FUlJPUjogXCJQUk9EVUNUU19ERVRFTEVfRVJST1JcIixcclxuICBQUk9EVUNUU19BREQ6IFwiUFJPRFVDVFNfQUREXCIsXHJcbiAgUFJPRFVDVFNfQUREX1NVQ0NFU1M6IFwiUFJPRFVDVFNfQUREX1NVQ0NFU1NcIixcclxuICBQUk9EVUNUU19BRERfRVJST1I6IFwiUFJPRFVDVFNfQUREX0VSUk9SXCIsXHJcbiAgUFJPRFVDVFNfVVBEQVRFOiBcIlBST0RVQ1RTX1VQREFURVwiLFxyXG4gIFBST0RVQ1RTX1VQREFURV9TVUNDRVNTOiBcIlBST0RVQ1RTX1VQREFURV9TVUNDRVNTXCIsXHJcbiAgUFJPRFVDVFNfVVBEQVRFX0VSUk9SOiBcIlBST0RVQ1RTX1VQREFURV9FUlJPUlwiLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyByb290UmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJzXCI7XHJcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi9zYWdhc1wiO1xyXG5cclxuY29uc3QgYmluZE1pZGRsZXdhcmUgPSAobWlkZGxld2FyZSkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnbG9iYWwtcmVxdWlyZSxpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcclxuICAgIGNvbnN0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9ID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTtcclxuICAgIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XHJcbiAgfVxyXG4gIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlLCBjdHgpID0+IHtcclxuICBjb25zdCB7IGlzU2VydmVyLCByZXEgPSBudWxsIH0gPSBjdHg7XHJcblxyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuXHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICAgIHJvb3RSZWR1Y2VyLFxyXG4gICAgcHJlbG9hZGVkU3RhdGUsXHJcbiAgICBiaW5kTWlkZGxld2FyZShbc2FnYU1pZGRsZXdhcmVdKVxyXG4gICk7XHJcblxyXG4gIGlmIChyZXEgfHwgIWlzU2VydmVyKSB7XHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBwcm9kdWN0c1JlZHVjZXIgfSBmcm9tIFwiLi9wcm9kdWN0c1JlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgcHJvZHVjdHM6IHByb2R1Y3RzUmVkdWNlcixcclxufSk7XHJcbiIsImltcG9ydCBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgcHJvZHVjdHM6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFJPRFVDVFNfRkVUQ0hfU1VDQ0VTUzoge1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IHBheWxvYWQucHJvZHVjdHMsIGxvYWRlcjogZmFsc2UgfTtcclxuICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFJPRFVDVFNfRkVUQ0hfU1RBUlQ6IHtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRlcjogdHJ1ZSB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QUk9EVUNUU19GRVRDSF9FUlJPUjoge1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IHBheWxvYWQuZXJyb3IsIGxvYWRlcjogZmFsc2UgfTtcclxuICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFJPRFVDVFNfREVURUxFX09ORToge1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGVyOiB0cnVlIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBST0RVQ1RTX0RFVEVMRV9PTkVfU1VDQ0VTUzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRlcjogZmFsc2UsXHJcbiAgICAgICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLmZpbHRlcigoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiBlbGVtZW50LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5kZWxldGVkUHJvZHVjdElkO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QUk9EVUNUU19ERVRFTEVfT05FX0VSUk9SOiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogcGF5bG9hZC5lcnJvciwgbG9hZGVyOiBmYWxzZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFJPRFVDVFNfQUREX1NVQ0NFU1M6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czogWy4uLnN0YXRlLnByb2R1Y3RzLCBhY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgICAgbG9hZGVyOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBST0RVQ1RTX1VQREFURV9FUlJPUjoge1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IHBheWxvYWQuZXJyb3IsIGxvYWRlcjogZmFsc2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBST0RVQ1RTX1VQREFURV9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkLCBcIiArKysrKysrKytcIik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdHM6IFsuLi5zdGF0ZS5wcm9kdWN0cywgYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICAgIGxvYWRlcjogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgZm9yayB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHtcclxuICBzYWdhIGFzIHByb2R1Y3RTYWdhLFxyXG4gIGRlbGV0ZU9uZSxcclxuICBhZGROZXdQcm9kdWN0LFxyXG4gIHVwZGF0ZU9uZVByb2R1Y3QsXHJcbn0gZnJvbSBcIi4vcHJvZHVjdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBmb3JrKHByb2R1Y3RTYWdhKTtcclxuICB5aWVsZCBmb3JrKGRlbGV0ZU9uZSk7XHJcbiAgeWllbGQgZm9yayhhZGROZXdQcm9kdWN0KTtcclxuICB5aWVsZCBmb3JrKHVwZGF0ZU9uZVByb2R1Y3QpO1xyXG59XHJcbiIsImltcG9ydCBQcm9kdWN0c1NlcnZpY2UgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzXCI7XHJcbmltcG9ydCB7XHJcbiAgY2FsbCxcclxuICBwdXQsXHJcbiAgdGFrZUV2ZXJ5LFxyXG4gIHNlbGVjdCxcclxuICBhbGwsXHJcbiAgdGFrZSxcclxuICB0YWtlTGF0ZXN0LFxyXG59IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGFjdGlvblR5cGVzIGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHtcclxuICBwcm9kdWN0c0ZldGNoU3VjY2VzcyxcclxuICBwcm9kdWN0c0ZldGNoRXJyb3IsXHJcbiAgcHJvZHVjdHNEZWxldGVPbmVTdWNjZXNzLFxyXG4gIHByb2R1Y3RzRGVsZXRlT25lRXJyb3IsXHJcbiAgcHJvZHVjdHNBZGRFcnJvcixcclxuICBwcm9kdWN0c0FkZFN1Y2Nlc3MsXHJcbiAgcHJvZHVjdHNVcGRhdGVTdWNjZXNzLFxyXG4gIHByb2R1Y3RzVXBkYXRlRXJyb3IsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvcHJvZHVjdHNcIjtcclxuXHJcbmZ1bmN0aW9uKiBnZXRQcm9kdWN0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwoUHJvZHVjdHNTZXJ2aWNlLmdldFByb2R1Y3RzUXVlcnkpO1xyXG4gICAgeWllbGQgcHV0KHByb2R1Y3RzRmV0Y2hTdWNjZXNzKHsgcHJvZHVjdHM6IGRhdGEuZGF0YS5wcm9kdWN0cyB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dChwcm9kdWN0c0ZldGNoRXJyb3IoZXJyb3IpKTtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogc2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW3Rha2VMYXRlc3QoYWN0aW9uVHlwZXMuUFJPRFVDVFNfRkVUQ0hfU1RBUlQsIGdldFByb2R1Y3RzKV0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZGVsZXRlT25lUHJvZHVjdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwoUHJvZHVjdHNTZXJ2aWNlLmRlbGV0ZVByb2R1Y3RRdWVyeSwgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgaWYgKGRhdGEuc3RhdHVzID09IFwiMjAwXCIpIHtcclxuICAgICAgeWllbGQgcHV0KHByb2R1Y3RzRGVsZXRlT25lU3VjY2Vzcyh7IGRlbGV0ZWRQcm9kdWN0SWQ6IGFjdGlvbi5wYXlsb2FkIH0pKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHByb2R1Y3RzRGVsZXRlT25lRXJyb3IoZXJyb3IpKTtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZGVsZXRlT25lKCkge1xyXG4gIHlpZWxkIGFsbChbdGFrZUxhdGVzdChhY3Rpb25UeXBlcy5QUk9EVUNUU19ERVRFTEVfT05FLCBkZWxldGVPbmVQcm9kdWN0KV0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUHJvZHVjdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwoUHJvZHVjdHNTZXJ2aWNlLmFkZFByb2R1Y3RRdWVyeSwgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBpZiAoZGF0YS5zdGF0dXMgPT0gXCIyMDBcIikge1xyXG4gICAgICB5aWVsZCBwdXQocHJvZHVjdHNBZGRTdWNjZXNzKGRhdGEuZGF0YS5kYXRhLmFkZFByb2R1Y3QpKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHByb2R1Y3RzQWRkRXJyb3IoZXJyb3IpKTtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogYWRkTmV3UHJvZHVjdCgpIHtcclxuICB5aWVsZCBhbGwoW3Rha2VMYXRlc3QoYWN0aW9uVHlwZXMuUFJPRFVDVFNfQURELCBhZGRQcm9kdWN0KV0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBkYXRlUHJvZHVjdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwoUHJvZHVjdHNTZXJ2aWNlLnVwZGF0ZVBvZHVjdFF1ZXJ5LCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGlmIChkYXRhLnN0YXR1cyA9PSBcIjIwMFwiKSB7XHJcbiAgICAgIHlpZWxkIHB1dChwcm9kdWN0c1VwZGF0ZVN1Y2Nlc3MoZGF0YS5kYXRhLmRhdGEudXBkYXRlUHJvZHVjdCkpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQocHJvZHVjdHNVcGRhdGVFcnJvcihlcnJvcikpO1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB1cGRhdGVPbmVQcm9kdWN0KCkge1xyXG4gIHlpZWxkIGFsbChbdGFrZUxhdGVzdChhY3Rpb25UeXBlcy5QUk9EVUNUU19VUERBVEUsIHVwZGF0ZVByb2R1Y3QpXSk7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5jb25zdCBncmFwaFFMVXJsID0gXCIvZ3JhcGhxbFwiO1xyXG5cclxuY2xhc3MgUHJvZHVjdHNTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcih1cmwpIHtcclxuICAgIHRoaXMuc2VuZGVyID0gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgYmFzZVVSTDogdXJsLFxyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFByb2R1Y3RzUXVlcnkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zZW5kZXIucG9zdChcIlwiLCB7XHJcbiAgICAgIHF1ZXJ5OiBge1xyXG4gICAgICAgICAgICBwcm9kdWN0cyB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBtb2RlbF9uYW1lXHJcbiAgICAgICAgICAgICAgbW9kZWxfY29sb3JcclxuICAgICAgICAgICAgICBtb2RlbF9jYXRlZ29yeVxyXG4gICAgICAgICAgICAgIGNyZWF0ZWRCeSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgYWdlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9YCxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRhdGEuZGF0YTtcclxuICB9O1xyXG5cclxuICBkZWxldGVQcm9kdWN0UXVlcnkgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBcImRlbGV0ZVByb2R1Y3RcIjtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNlbmRlci5wb3N0KFwiXCIsIHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICBtdXRhdGlvbiB7XHJcbiAgICAgICAgICAke25hbWV9KGlkOiAke2lkfSkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9O1xyXG5cclxuICBhZGRQcm9kdWN0UXVlcnkgPSBhc3luYyAodXNlckRhdGEpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBcImFkZFByb2R1Y3RcIjtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNlbmRlci5wb3N0KFwiXCIsIHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICBtdXRhdGlvbiB7XHJcbiAgICAgICAgICAke25hbWV9KFxyXG4gICAgICAgICAgICBuYW1lOiBcIiR7dXNlckRhdGEubmFtZX1cIixcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiJHt1c2VyRGF0YS5jYXRlZ29yeX1cIixcclxuICAgICAgICAgICAgY29sb3I6IFwiJHt1c2VyRGF0YS5jb2xvcn1cIixcclxuICAgICAgICAgICAgY3JlYXRlZEJ5OiBcIiR7dXNlckRhdGEuY3JlYXRlZEJ5fVwiLFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgIG1vZGVsX25hbWVcclxuICAgICAgICAgICAgIG1vZGVsX2NhdGVnb3J5XHJcbiAgICAgICAgICAgICBtb2RlbF9jb2xvclxyXG4gICAgICAgICAgICAgY3JlYXRlZEJ5IHtcclxuICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgYWdlXHJcbiAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH07XHJcblxyXG4gIHVwZGF0ZVBvZHVjdFF1ZXJ5ID0gYXN5bmMgKHVzZXJEYXRhKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gXCJ1cGRhdGVQcm9kdWN0XCI7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zZW5kZXIucG9zdChcIlwiLCB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICAgICR7bmFtZX0oXHJcbiAgICAgIGlkOiBcIiR7dXNlckRhdGEuaWR9XCIsXHJcbiAgICAgIG5hbWU6IFwiJHt1c2VyRGF0YS5uYW1lfVwiLFxyXG4gICAgICBjYXRlZ29yeTogXCIke3VzZXJEYXRhLmNhdGVnb3J5fVwiLFxyXG4gICAgICBjb2xvcjogXCIke3VzZXJEYXRhLmNvbG9yfVwiLFxyXG4gICAgICBjcmVhdGVkQnk6IFwiJHt1c2VyRGF0YS5jcmVhdGVkQnl9XCIsXHJcbiAgICApIHtcclxuICAgICAgbW9kZWxfbmFtZVxyXG4gICAgICBtb2RlbF9jYXRlZ29yeVxyXG4gICAgICBtb2RlbF9jb2xvclxyXG4gICAgICBpZFxyXG4gICAgICBjcmVhdGVkQnkge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgYWdlXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAgIGAsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEsIFwiICsrKysrKytcIik7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJvZHVjdHNTZXJ2aWNlKGdyYXBoUUxVcmwpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tYm9vc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcG9sbG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=