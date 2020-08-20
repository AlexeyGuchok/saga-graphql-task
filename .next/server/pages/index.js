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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/addProduct.js":
/*!*****************************!*\
  !*** ./pages/addProduct.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/products */ "./redux/actions/products.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class AddProduct extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      color: "",
      category: "",
      createdBy: null
    };
  }

  render() {
    console.log(this.props);

    const createNewProductBtn = () => {
      this.props.dispatchProductsAdd(this.state);
    };

    return __jsx("div", null, __jsx("h3", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442"), __jsx("div", null, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "standard-basic",
      label: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F",
      type: "text",
      onChange: e => this.setState({
        name: e.target.value
      })
    })), __jsx("div", null, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "standard-basic",
      label: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",
      onChange: e => this.setState({
        category: e.target.value
      })
    })), __jsx("div", null, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "standard-basic",
      label: "\u0426\u0432\u0435\u0442",
      onChange: e => this.setState({
        color: e.target.value
      })
    })), __jsx("select", {
      onChange: e => this.setState({
        createdBy: Number(e.target.value)
      })
    }, this.props.dealers && this.props.dealers.map(element => {
      return __jsx("option", {
        value: element.createdBy.id
      }, element.createdBy.name);
    })), __jsx("div", null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      variant: "contained",
      color: "primary",
      onClick: createNewProductBtn
    }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C")));
  }

}

const mapDispatchToProps = {
  dispatchProductsAdd: _redux_actions_products__WEBPACK_IMPORTED_MODULE_3__["productsAdd"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, mapDispatchToProps)(AddProduct));

/***/ }),

/***/ "./pages/deleteProduct.js":
/*!********************************!*\
  !*** ./pages/deleteProduct.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/products */ "./redux/actions/products.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class DeleteProduct extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const deleteHandler = () => {
      this.props.dispatchProductsDeleteOne(this.props.id);
    };

    return __jsx("div", null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      variant: "contained",
      color: "secondary",
      onClick: deleteHandler
    }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"));
  }

}

const mapDispatchToProps = {
  dispatchProductsDeleteOne: _redux_actions_products__WEBPACK_IMPORTED_MODULE_2__["productsDeleteOne"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(DeleteProduct));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productList */ "./pages/productList.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = () => {
  return __jsx("section", null, __jsx("h1", null, "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B"), __jsx(_productList__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/productDetails.js":
/*!*********************************!*\
  !*** ./pages/productDetails.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose/compose */ "recompose/compose");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries/queries */ "./queries/queries.js");
/* harmony import */ var _updateProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateProduct */ "./pages/updateProduct.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class ProductDetails extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      color: "",
      category: "",
      createdBy: "",
      form: false
    };
  }

  render() {
    console.log(this.props);
    return __jsx("div", {
      style: {
        width: "90%",
        margin: "20px auto",
        padding: "2vh"
      }
    }, __jsx("h2", null, "\u0414\u0435\u0442\u0430\u043B\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430"), __jsx("div", null, this.props.data.product && __jsx("div", null, __jsx("h4", null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: ", this.props.data.product.model_name, " "), __jsx("div", null, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F: ", this.props.data.product.model_category, " "), __jsx("div", null, "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C: ", this.props.data.product.createdBy.name), __jsx("div", null, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F: ", this.props.data.product.createdBy.age))), __jsx("button", {
      onClick: e => {
        this.setState({
          form: !this.state.form
        });
      }
    }, this.state.form ? "Закрыть" : "Изменить"), this.state.form && __jsx(_updateProduct__WEBPACK_IMPORTED_MODULE_4__["default"], {
      userData: this.props.data.product,
      id: this.props.productId
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_queries_queries__WEBPACK_IMPORTED_MODULE_3__["getProductQuery"], {
  options: props => {
    return {
      variables: {
        id: props.productId
      }
    };
  }
})(ProductDetails));

/***/ }),

/***/ "./pages/productList.js":
/*!******************************!*\
  !*** ./pages/productList.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/products */ "./redux/actions/products.js");
/* harmony import */ var _deleteProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteProduct */ "./pages/deleteProduct.js");
/* harmony import */ var _productDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productDetails */ "./pages/productDetails.js");
/* harmony import */ var _addProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addProduct */ "./pages/addProduct.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class ProductList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  componentDidMount() {
    this.props.dispatchProductsFetchStart();
  }

  render() {
    console.log(this.props);
    return __jsx("div", null, this.props.loader && __jsx("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."), this.props.products && __jsx("ul", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        height: "auto"
      }
    }, this.props.products.map(element => {
      return __jsx("li", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "auto"
        }
      }, __jsx("div", {
        style: {
          width: "32%"
        },
        onClick: () => {
          this.setState({
            selected: element.id
          });
        }
      }, element.model_name), __jsx("div", {
        style: {
          width: "32%"
        }
      }, element.model_category), __jsx(_deleteProduct__WEBPACK_IMPORTED_MODULE_3__["default"], {
        style: {
          width: "32%"
        },
        id: element.id
      }));
    })), this.state.selected && __jsx(_productDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
      productId: this.state.selected
    }), __jsx(_addProduct__WEBPACK_IMPORTED_MODULE_5__["default"], {
      dealers: this.props.products
    }));
  }

}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    loader: state.products.loader
  };
};

const mapDispatchToProps = {
  dispatchProductsFetchStart: _redux_actions_products__WEBPACK_IMPORTED_MODULE_2__["productsFetchStart"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ProductList));

/***/ }),

/***/ "./pages/updateProduct.js":
/*!********************************!*\
  !*** ./pages/updateProduct.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/products */ "./redux/actions/products.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class UpdateProduct extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      id: Number(this.props.id),
      name: "",
      color: "",
      category: "",
      createdBy: null
    };
  }

  render() {
    const updateProduct = () => {
      console.log(this.state);
      this.props.dispatchProductsUpdate(this.state);
    };

    return __jsx("div", null, __jsx("div", null, __jsx("input", {
      type: "text",
      placeholder: "\u041D\u043E\u0432\u043E\u0435 \u0438\u043C\u044F",
      onChange: e => this.setState({
        name: e.target.value
      })
    })), __jsx("div", null, __jsx("input", {
      type: "text",
      placeholder: "\u041D\u043E\u0432\u0430\u044F \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",
      onChange: e => this.setState({
        category: e.target.value
      })
    })), __jsx("div", null, __jsx("input", {
      type: "text",
      placeholder: "\u041D\u043E\u0432\u044B\u0439 \u0446\u0432\u0435\u0442",
      onChange: e => this.setState({
        color: e.target.value
      })
    })), __jsx("div", null, __jsx("input", {
      type: "text",
      placeholder: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C",
      onChange: e => this.setState({
        createdBy: Number(e.target.value)
      })
    })), __jsx("button", {
      onClick: updateProduct
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"));
  }

}

const mapDispatchToProps = {
  dispatchProductsUpdate: _redux_actions_products__WEBPACK_IMPORTED_MODULE_2__["productsUpdate"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(UpdateProduct));

/***/ }),

/***/ "./queries/queries.js":
/*!****************************!*\
  !*** ./queries/queries.js ***!
  \****************************/
/*! exports provided: getProductsQuery, getDealersQuery, addProductQuery, deleteProduct, getProductQuery, updateProductsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsQuery", function() { return getProductsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDealersQuery", function() { return getDealersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductQuery", function() { return addProductQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductQuery", function() { return getProductQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProductsQuery", function() { return updateProductsQuery; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);

const getProductsQuery = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query {
    products {
      id
      model_name
      model_color
      model_category
      createdBy {
        id
      }
    }
  }
`;
const getDealersQuery = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query {
    dealers {
      id
      name
      age
    }
  }
`;
const addProductQuery = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation(
    $name: String!
    $category: String!
    $color: String!
    $createdBy: ID!
  ) {
    addProduct(
      name: $name
      category: $category
      color: $color
      createdBy: $createdBy
    ) {
      model_name
      model_category
      id
    }
  }
`;
const deleteProduct = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation($id: ID!) {
    deleteProduct(id: $id) {
      model_name
      model_category
      id
    }
  }
`;
const getProductQuery = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query($id: ID!) {
    product(id: $id) {
      model_name
      model_category
      model_color
      createdBy {
        name
        age
      }
    }
  }
`;
const updateProductsQuery = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation(
    $id: ID!
    $name: String!
    $category: String!
    $color: String!
    $createdBy: ID!
  ) {
    updateProduct(
      id: $id
      name: $name
      category: $category
      color: $color
      createdBy: $createdBy
    ) {
      model_name
      model_category
      id
    }
  }
`;


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

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

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

/***/ "recompose/compose":
/*!************************************!*\
  !*** external "recompose/compose" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose/compose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRkUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kZWxldGVQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Byb2R1Y3REZXRhaWxzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Byb2R1Y3RMaXN0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3VwZGF0ZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vcXVlcmllcy9xdWVyaWVzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1ib29zdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWNvbXBvc2UvY29tcG9zZVwiIl0sIm5hbWVzIjpbIkFkZFByb2R1Y3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwiY29sb3IiLCJjYXRlZ29yeSIsImNyZWF0ZWRCeSIsInJlbmRlciIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVOZXdQcm9kdWN0QnRuIiwiZGlzcGF0Y2hQcm9kdWN0c0FkZCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiTnVtYmVyIiwiZGVhbGVycyIsIm1hcCIsImVsZW1lbnQiLCJpZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInByb2R1Y3RzQWRkIiwiY29ubmVjdCIsIkRlbGV0ZVByb2R1Y3QiLCJkZWxldGVIYW5kbGVyIiwiZGlzcGF0Y2hQcm9kdWN0c0RlbGV0ZU9uZSIsInByb2R1Y3RzRGVsZXRlT25lIiwiSW5kZXgiLCJQcm9kdWN0RGV0YWlscyIsImZvcm0iLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJkYXRhIiwicHJvZHVjdCIsIm1vZGVsX25hbWUiLCJtb2RlbF9jYXRlZ29yeSIsImFnZSIsInByb2R1Y3RJZCIsImdyYXBocWwiLCJnZXRQcm9kdWN0UXVlcnkiLCJvcHRpb25zIiwidmFyaWFibGVzIiwiUHJvZHVjdExpc3QiLCJzZWxlY3RlZCIsImNvbXBvbmVudERpZE1vdW50IiwiZGlzcGF0Y2hQcm9kdWN0c0ZldGNoU3RhcnQiLCJsb2FkZXIiLCJwcm9kdWN0cyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwiaGVpZ2h0IiwibWFwU3RhdGVUb1Byb3BzIiwicHJvZHVjdHNGZXRjaFN0YXJ0IiwiVXBkYXRlUHJvZHVjdCIsInVwZGF0ZVByb2R1Y3QiLCJkaXNwYXRjaFByb2R1Y3RzVXBkYXRlIiwicHJvZHVjdHNVcGRhdGUiLCJnZXRQcm9kdWN0c1F1ZXJ5IiwiZ3FsIiwiZ2V0RGVhbGVyc1F1ZXJ5IiwiYWRkUHJvZHVjdFF1ZXJ5IiwiZGVsZXRlUHJvZHVjdCIsInVwZGF0ZVByb2R1Y3RzUXVlcnkiLCJwYXlsb2FkIiwidHlwZSIsImFjdGlvblR5cGVzIiwiUFJPRFVDVFNfRkVUQ0hfU1RBUlQiLCJwcm9kdWN0c0ZldGNoU3VjY2VzcyIsIlBST0RVQ1RTX0ZFVENIX1NVQ0NFU1MiLCJwcm9kdWN0c0ZldGNoRXJyb3IiLCJQUk9EVUNUU19GRVRDSF9FUlJPUiIsIlBST0RVQ1RTX0RFVEVMRV9PTkUiLCJwcm9kdWN0c0RlbGV0ZU9uZVN1Y2Nlc3MiLCJQUk9EVUNUU19ERVRFTEVfT05FX1NVQ0NFU1MiLCJwcm9kdWN0c0RlbGV0ZU9uZUVycm9yIiwiUFJPRFVDVFNfREVURUxFX09ORV9FUlJPUiIsIlBST0RVQ1RTX0FERCIsInByb2R1Y3RzQWRkU3VjY2VzcyIsIlBST0RVQ1RTX0FERF9TVUNDRVNTIiwicHJvZHVjdHNBZGRFcnJvciIsIlBST0RVQ1RTX0FERF9FUlJPUiIsIlBST0RVQ1RTX1VQREFURSIsInByb2R1Y3RzVXBkYXRlU3VjY2VzcyIsIlBST0RVQ1RTX1VQREFURV9TVUNDRVNTIiwicHJvZHVjdHNVcGRhdGVFcnJvciIsIlBST0RVQ1RTX1VQREFURV9FUlJPUiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFVBQU4sU0FBeUJDLCtDQUF6QixDQUFtQztBQUNqQ0MsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxVQUFJLEVBQUUsRUFESztBQUVYQyxXQUFLLEVBQUUsRUFGSTtBQUdYQyxjQUFRLEVBQUUsRUFIQztBQUlYQyxlQUFTLEVBQUU7QUFKQSxLQUFiO0FBTUQ7O0FBRURDLFFBQU0sR0FBRztBQUNQQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLUixLQUFqQjs7QUFDQSxVQUFNUyxtQkFBbUIsR0FBRyxNQUFNO0FBQ2hDLFdBQUtULEtBQUwsQ0FBV1UsbUJBQVgsQ0FBK0IsS0FBS1QsS0FBcEM7QUFDRCxLQUZEOztBQUlBLFdBQ0UsbUJBQ0UsZ0hBREYsRUFFRSxtQkFDRSxNQUFDLGtFQUFEO0FBQ0UsUUFBRSxFQUFDLGdCQURMO0FBRUUsV0FBSyxFQUFDLCtEQUZSO0FBR0UsVUFBSSxFQUFDLE1BSFA7QUFJRSxjQUFRLEVBQUdVLENBQUQsSUFBTyxLQUFLQyxRQUFMLENBQWM7QUFBRVYsWUFBSSxFQUFFUyxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFBakIsT0FBZDtBQUpuQixNQURGLENBRkYsRUFVRSxtQkFDRSxNQUFDLGtFQUFEO0FBQ0UsUUFBRSxFQUFDLGdCQURMO0FBRUUsV0FBSyxFQUFDLHdEQUZSO0FBR0UsY0FBUSxFQUFHSCxDQUFELElBQU8sS0FBS0MsUUFBTCxDQUFjO0FBQUVSLGdCQUFRLEVBQUVPLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUFyQixPQUFkO0FBSG5CLE1BREYsQ0FWRixFQWlCRSxtQkFDRSxNQUFDLGtFQUFEO0FBQ0UsUUFBRSxFQUFDLGdCQURMO0FBRUUsV0FBSyxFQUFDLDBCQUZSO0FBR0UsY0FBUSxFQUFHSCxDQUFELElBQU8sS0FBS0MsUUFBTCxDQUFjO0FBQUVULGFBQUssRUFBRVEsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBQWxCLE9BQWQ7QUFIbkIsTUFERixDQWpCRixFQXdCRTtBQUNFLGNBQVEsRUFBR0gsQ0FBRCxJQUFPLEtBQUtDLFFBQUwsQ0FBYztBQUFFUCxpQkFBUyxFQUFFVSxNQUFNLENBQUNKLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWO0FBQW5CLE9BQWQ7QUFEbkIsT0FHRyxLQUFLZCxLQUFMLENBQVdnQixPQUFYLElBQ0MsS0FBS2hCLEtBQUwsQ0FBV2dCLE9BQVgsQ0FBbUJDLEdBQW5CLENBQXdCQyxPQUFELElBQWE7QUFDbEMsYUFDRTtBQUFRLGFBQUssRUFBRUEsT0FBTyxDQUFDYixTQUFSLENBQWtCYztBQUFqQyxTQUNHRCxPQUFPLENBQUNiLFNBQVIsQ0FBa0JILElBRHJCLENBREY7QUFLRCxLQU5ELENBSkosQ0F4QkYsRUFxQ0UsbUJBQ0UsTUFBQywrREFBRDtBQUNFLGFBQU8sRUFBQyxXQURWO0FBRUUsV0FBSyxFQUFDLFNBRlI7QUFHRSxhQUFPLEVBQUVPO0FBSFgsb0RBREYsQ0FyQ0YsQ0FERjtBQWlERDs7QUFsRWdDOztBQXFFbkMsTUFBTVcsa0JBQWtCLEdBQUc7QUFDekJWLHFCQUFtQixFQUFFVyxtRUFBV0E7QUFEUCxDQUEzQjtBQUllQywwSEFBTyxDQUFDLElBQUQsRUFBT0Ysa0JBQVAsQ0FBUCxDQUFrQ3ZCLFVBQWxDLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0wQixhQUFOLFNBQTRCekIsK0NBQTVCLENBQXNDO0FBQ3BDUSxRQUFNLEdBQUc7QUFDUCxVQUFNa0IsYUFBYSxHQUFHLE1BQU07QUFDMUIsV0FBS3hCLEtBQUwsQ0FBV3lCLHlCQUFYLENBQXFDLEtBQUt6QixLQUFMLENBQVdtQixFQUFoRDtBQUNELEtBRkQ7O0FBR0EsV0FDRSxtQkFDRSxNQUFDLCtEQUFEO0FBQVEsYUFBTyxFQUFDLFdBQWhCO0FBQTRCLFdBQUssRUFBQyxXQUFsQztBQUE4QyxhQUFPLEVBQUVLO0FBQXZELG9EQURGLENBREY7QUFPRDs7QUFabUM7O0FBZXRDLE1BQU1KLGtCQUFrQixHQUFHO0FBQ3pCSywyQkFBeUIsRUFBRUMseUVBQWlCQTtBQURuQixDQUEzQjtBQUllSiwwSEFBTyxDQUFDLElBQUQsRUFBT0Ysa0JBQVAsQ0FBUCxDQUFrQ0csYUFBbEMsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBOztBQUVBLE1BQU1JLEtBQUssR0FBRyxNQUFNO0FBQ2xCLFNBQ0UsdUJBQ0UscUVBREYsRUFFRSxNQUFDLG9EQUFELE9BRkYsQ0FERjtBQU1ELENBUEQ7O0FBU2VBLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLGNBQU4sU0FBNkI5QiwrQ0FBN0IsQ0FBdUM7QUFDckNDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsVUFBSSxFQUFFLEVBREs7QUFFWEMsV0FBSyxFQUFFLEVBRkk7QUFHWEMsY0FBUSxFQUFFLEVBSEM7QUFJWEMsZUFBUyxFQUFFLEVBSkE7QUFLWHdCLFVBQUksRUFBRTtBQUxLLEtBQWI7QUFPRDs7QUFDRHZCLFFBQU0sR0FBRztBQUNQQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLUixLQUFqQjtBQUNBLFdBQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRThCLGFBQUssRUFBRSxLQUFUO0FBQWdCQyxjQUFNLEVBQUUsV0FBeEI7QUFBcUNDLGVBQU8sRUFBRTtBQUE5QztBQUFaLE9BQ0UsMEdBREYsRUFFRSxtQkFDRyxLQUFLaEMsS0FBTCxDQUFXaUMsSUFBWCxDQUFnQkMsT0FBaEIsSUFDQyxtQkFDRSx3RUFBZSxLQUFLbEMsS0FBTCxDQUFXaUMsSUFBWCxDQUFnQkMsT0FBaEIsQ0FBd0JDLFVBQXZDLE1BREYsRUFFRSwrRUFBaUIsS0FBS25DLEtBQUwsQ0FBV2lDLElBQVgsQ0FBZ0JDLE9BQWhCLENBQXdCRSxjQUF6QyxNQUZGLEVBR0UsK0VBQWlCLEtBQUtwQyxLQUFMLENBQVdpQyxJQUFYLENBQWdCQyxPQUFoQixDQUF3QjdCLFNBQXhCLENBQWtDSCxJQUFuRCxDQUhGLEVBSUUsa0pBQzBCLEtBQUtGLEtBQUwsQ0FBV2lDLElBQVgsQ0FBZ0JDLE9BQWhCLENBQXdCN0IsU0FBeEIsQ0FBa0NnQyxHQUQ1RCxDQUpGLENBRkosQ0FGRixFQWNFO0FBQ0UsYUFBTyxFQUFHMUIsQ0FBRCxJQUFPO0FBQ2QsYUFBS0MsUUFBTCxDQUFjO0FBQUVpQixjQUFJLEVBQUUsQ0FBQyxLQUFLNUIsS0FBTCxDQUFXNEI7QUFBcEIsU0FBZDtBQUNEO0FBSEgsT0FLRyxLQUFLNUIsS0FBTCxDQUFXNEIsSUFBWCxHQUFrQixTQUFsQixHQUE4QixVQUxqQyxDQWRGLEVBcUJHLEtBQUs1QixLQUFMLENBQVc0QixJQUFYLElBQ0MsTUFBQyxzREFBRDtBQUNFLGNBQVEsRUFBRSxLQUFLN0IsS0FBTCxDQUFXaUMsSUFBWCxDQUFnQkMsT0FENUI7QUFFRSxRQUFFLEVBQUUsS0FBS2xDLEtBQUwsQ0FBV3NDO0FBRmpCLE1BdEJKLENBREY7QUE4QkQ7O0FBM0NvQzs7QUE4Q3hCQywySEFBTyxDQUFDQyxnRUFBRCxFQUFrQjtBQUN0Q0MsU0FBTyxFQUFHekMsS0FBRCxJQUFXO0FBQ2xCLFdBQU87QUFDTDBDLGVBQVMsRUFBRTtBQUNUdkIsVUFBRSxFQUFFbkIsS0FBSyxDQUFDc0M7QUFERDtBQUROLEtBQVA7QUFLRDtBQVBxQyxDQUFsQixDQUFQLENBUVpWLGNBUlksQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNZSxXQUFOLFNBQTBCN0MsK0NBQTFCLENBQW9DO0FBQ2xDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1gyQyxjQUFRLEVBQUU7QUFEQyxLQUFiO0FBR0Q7O0FBRURDLG1CQUFpQixHQUFHO0FBQ2xCLFNBQUs3QyxLQUFMLENBQVc4QywwQkFBWDtBQUNEOztBQUVEeEMsUUFBTSxHQUFHO0FBQ1BDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtSLEtBQWpCO0FBQ0EsV0FDRSxtQkFDRyxLQUFLQSxLQUFMLENBQVcrQyxNQUFYLElBQXFCLHlFQUR4QixFQUVHLEtBQUsvQyxLQUFMLENBQVdnRCxRQUFYLElBQ0M7QUFDRSxXQUFLLEVBQUU7QUFDTEMsZUFBTyxFQUFFLE1BREo7QUFFTEMsc0JBQWMsRUFBRSxlQUZYO0FBR0xDLGdCQUFRLEVBQUUsTUFITDtBQUlMQyxjQUFNLEVBQUU7QUFKSDtBQURULE9BUUcsS0FBS3BELEtBQUwsQ0FBV2dELFFBQVgsQ0FBb0IvQixHQUFwQixDQUF5QkMsT0FBRCxJQUFhO0FBQ3BDLGFBQ0U7QUFDRSxhQUFLLEVBQUU7QUFDTCtCLGlCQUFPLEVBQUUsTUFESjtBQUVMQyx3QkFBYyxFQUFFLGVBRlg7QUFHTHBCLGVBQUssRUFBRSxLQUhGO0FBSUxDLGdCQUFNLEVBQUU7QUFKSDtBQURULFNBUUU7QUFDRSxhQUFLLEVBQUU7QUFBRUQsZUFBSyxFQUFFO0FBQVQsU0FEVDtBQUVFLGVBQU8sRUFBRSxNQUFNO0FBQ2IsZUFBS2xCLFFBQUwsQ0FBYztBQUFFZ0Msb0JBQVEsRUFBRTFCLE9BQU8sQ0FBQ0M7QUFBcEIsV0FBZDtBQUNEO0FBSkgsU0FNR0QsT0FBTyxDQUFDaUIsVUFOWCxDQVJGLEVBZ0JFO0FBQUssYUFBSyxFQUFFO0FBQUVMLGVBQUssRUFBRTtBQUFUO0FBQVosU0FBK0JaLE9BQU8sQ0FBQ2tCLGNBQXZDLENBaEJGLEVBa0JFLE1BQUMsc0RBQUQ7QUFBZSxhQUFLLEVBQUU7QUFBRU4sZUFBSyxFQUFFO0FBQVQsU0FBdEI7QUFBd0MsVUFBRSxFQUFFWixPQUFPLENBQUNDO0FBQXBELFFBbEJGLENBREY7QUFzQkQsS0F2QkEsQ0FSSCxDQUhKLEVBc0NHLEtBQUtsQixLQUFMLENBQVcyQyxRQUFYLElBQ0MsTUFBQyx1REFBRDtBQUFnQixlQUFTLEVBQUUsS0FBSzNDLEtBQUwsQ0FBVzJDO0FBQXRDLE1BdkNKLEVBMENFLE1BQUMsbURBQUQ7QUFBWSxhQUFPLEVBQUUsS0FBSzVDLEtBQUwsQ0FBV2dEO0FBQWhDLE1BMUNGLENBREY7QUE4Q0Q7O0FBNURpQzs7QUErRHBDLE1BQU1LLGVBQWUsR0FBSXBELEtBQUQsSUFBVztBQUNqQyxTQUFPO0FBQ0wrQyxZQUFRLEVBQUUvQyxLQUFLLENBQUMrQyxRQUFOLENBQWVBLFFBRHBCO0FBRUxELFVBQU0sRUFBRTlDLEtBQUssQ0FBQytDLFFBQU4sQ0FBZUQ7QUFGbEIsR0FBUDtBQUlELENBTEQ7O0FBT0EsTUFBTTNCLGtCQUFrQixHQUFHO0FBQ3pCMEIsNEJBQTBCLEVBQUVRLDBFQUFrQkE7QUFEckIsQ0FBM0I7QUFJZWhDLDBIQUFPLENBQUMrQixlQUFELEVBQWtCakMsa0JBQWxCLENBQVAsQ0FBNkN1QixXQUE3QyxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNWSxhQUFOLFNBQTRCekQsK0NBQTVCLENBQXNDO0FBQ3BDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hrQixRQUFFLEVBQUVKLE1BQU0sQ0FBQyxLQUFLZixLQUFMLENBQVdtQixFQUFaLENBREM7QUFFWGpCLFVBQUksRUFBRSxFQUZLO0FBR1hDLFdBQUssRUFBRSxFQUhJO0FBSVhDLGNBQVEsRUFBRSxFQUpDO0FBS1hDLGVBQVMsRUFBRTtBQUxBLEtBQWI7QUFPRDs7QUFDREMsUUFBTSxHQUFHO0FBQ1AsVUFBTWtELGFBQWEsR0FBRyxNQUFNO0FBQzFCakQsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS1AsS0FBakI7QUFDQSxXQUFLRCxLQUFMLENBQVd5RCxzQkFBWCxDQUFrQyxLQUFLeEQsS0FBdkM7QUFDRCxLQUhEOztBQUtBLFdBQ0UsbUJBQ0UsbUJBQ0U7QUFDRSxVQUFJLEVBQUMsTUFEUDtBQUVFLGlCQUFXLEVBQUMsbURBRmQ7QUFHRSxjQUFRLEVBQUdVLENBQUQsSUFBTyxLQUFLQyxRQUFMLENBQWM7QUFBRVYsWUFBSSxFQUFFUyxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFBakIsT0FBZDtBQUhuQixNQURGLENBREYsRUFRRSxtQkFDRTtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsaUJBQVcsRUFBQyx1RkFGZDtBQUdFLGNBQVEsRUFBR0gsQ0FBRCxJQUFPLEtBQUtDLFFBQUwsQ0FBYztBQUFFUixnQkFBUSxFQUFFTyxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFBckIsT0FBZDtBQUhuQixNQURGLENBUkYsRUFlRSxtQkFDRTtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsaUJBQVcsRUFBQyx5REFGZDtBQUdFLGNBQVEsRUFBR0gsQ0FBRCxJQUFPLEtBQUtDLFFBQUwsQ0FBYztBQUFFVCxhQUFLLEVBQUVRLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUFsQixPQUFkO0FBSG5CLE1BREYsQ0FmRixFQXNCRSxtQkFDRTtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsaUJBQVcsRUFBQywrR0FGZDtBQUdFLGNBQVEsRUFBR0gsQ0FBRCxJQUNSLEtBQUtDLFFBQUwsQ0FBYztBQUFFUCxpQkFBUyxFQUFFVSxNQUFNLENBQUNKLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWO0FBQW5CLE9BQWQ7QUFKSixNQURGLENBdEJGLEVBK0JFO0FBQVEsYUFBTyxFQUFFMEM7QUFBakIsZ0VBL0JGLENBREY7QUFtQ0Q7O0FBcERtQzs7QUF1RHRDLE1BQU1wQyxrQkFBa0IsR0FBRztBQUN6QnFDLHdCQUFzQixFQUFFQyxzRUFBY0E7QUFEYixDQUEzQjtBQUllcEMsMEhBQU8sQ0FBQyxJQUFELEVBQU9GLGtCQUFQLENBQVAsQ0FBa0NtQyxhQUFsQyxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1JLGdCQUFnQixHQUFHQyxnREFBSTs7Ozs7Ozs7Ozs7O0NBQTdCO0FBY0EsTUFBTUMsZUFBZSxHQUFHRCxnREFBSTs7Ozs7Ozs7Q0FBNUI7QUFVQSxNQUFNRSxlQUFlLEdBQUdGLGdEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBNUI7QUFvQkEsTUFBTUcsYUFBYSxHQUFHSCxnREFBSTs7Ozs7Ozs7Q0FBMUI7QUFVQSxNQUFNcEIsZUFBZSxHQUFHb0IsZ0RBQUk7Ozs7Ozs7Ozs7OztDQUE1QjtBQWNBLE1BQU1JLG1CQUFtQixHQUFHSixnREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBaEM7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTU4sa0JBQWtCLEdBQUlXLE9BQUQsSUFBYTtBQUM3QyxTQUFPO0FBQUVDLFFBQUksRUFBRUMsa0RBQVcsQ0FBQ0Msb0JBQXBCO0FBQTBDSDtBQUExQyxHQUFQO0FBQ0QsQ0FGTTtBQUlBLE1BQU1JLG9CQUFvQixHQUFJSixPQUFELElBQWE7QUFDL0MsU0FBTztBQUFFQyxRQUFJLEVBQUVDLGtEQUFXLENBQUNHLHNCQUFwQjtBQUE0Q0w7QUFBNUMsR0FBUDtBQUNELENBRk07QUFJQSxNQUFNTSxrQkFBa0IsR0FBSU4sT0FBRCxJQUFhO0FBQzdDLFNBQU87QUFBRUMsUUFBSSxFQUFFQyxrREFBVyxDQUFDSyxvQkFBcEI7QUFBMENQO0FBQTFDLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTXZDLGlCQUFpQixHQUFJdUMsT0FBRCxJQUFhO0FBQzVDLFNBQU87QUFBRUMsUUFBSSxFQUFFQyxrREFBVyxDQUFDTSxtQkFBcEI7QUFBeUNSO0FBQXpDLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTVMsd0JBQXdCLEdBQUlULE9BQUQsSUFBYTtBQUNuRCxTQUFPO0FBQUVDLFFBQUksRUFBRUMsa0RBQVcsQ0FBQ1EsMkJBQXBCO0FBQWlEVjtBQUFqRCxHQUFQO0FBQ0QsQ0FGTTtBQUlBLE1BQU1XLHNCQUFzQixHQUFJWCxPQUFELElBQWE7QUFDakQsU0FBTztBQUFFQyxRQUFJLEVBQUVDLGtEQUFXLENBQUNVLHlCQUFwQjtBQUErQ1o7QUFBL0MsR0FBUDtBQUNELENBRk07QUFJQSxNQUFNNUMsV0FBVyxHQUFJNEMsT0FBRCxJQUFhO0FBQ3RDLFNBQU87QUFBRUMsUUFBSSxFQUFFQyxrREFBVyxDQUFDVyxZQUFwQjtBQUFrQ2I7QUFBbEMsR0FBUDtBQUNELENBRk07QUFJQSxNQUFNYyxrQkFBa0IsR0FBSWQsT0FBRCxJQUFhO0FBQzdDLFNBQU87QUFBRUMsUUFBSSxFQUFFQyxrREFBVyxDQUFDYSxvQkFBcEI7QUFBMENmO0FBQTFDLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTWdCLGdCQUFnQixHQUFJaEIsT0FBRCxJQUFhO0FBQzNDLFNBQU87QUFBRUMsUUFBSSxFQUFFQyxrREFBVyxDQUFDZSxrQkFBcEI7QUFBd0NqQjtBQUF4QyxHQUFQO0FBQ0QsQ0FGTTtBQUlBLE1BQU1QLGNBQWMsR0FBSU8sT0FBRCxJQUFhO0FBQ3pDMUQsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBLFNBQU87QUFBRTBELFFBQUksRUFBRUMsa0RBQVcsQ0FBQ2dCLGVBQXBCO0FBQXFDbEI7QUFBckMsR0FBUDtBQUNELENBSE07QUFLQSxNQUFNbUIscUJBQXFCLEdBQUluQixPQUFELElBQWE7QUFDaEQsU0FBTztBQUFFQyxRQUFJLEVBQUVDLGtEQUFXLENBQUNrQix1QkFBcEI7QUFBNkNwQjtBQUE3QyxHQUFQO0FBQ0QsQ0FGTTtBQUlBLE1BQU1xQixtQkFBbUIsR0FBSXJCLE9BQUQsSUFBYTtBQUM5QyxTQUFPO0FBQUVDLFFBQUksRUFBRUMsa0RBQVcsQ0FBQ29CLHFCQUFwQjtBQUEyQ3RCO0FBQTNDLEdBQVA7QUFDRCxDQUZNLEM7Ozs7Ozs7Ozs7OztBQy9DUDtBQUFlO0FBQ2JHLHNCQUFvQixFQUFFLHNCQURUO0FBRWJFLHdCQUFzQixFQUFFLHdCQUZYO0FBR2JFLHNCQUFvQixFQUFFLHNCQUhUO0FBSWJDLHFCQUFtQixFQUFFLHFCQUpSO0FBS2JFLDZCQUEyQixFQUFFLHlCQUxoQjtBQU1iRSwyQkFBeUIsRUFBRSx1QkFOZDtBQU9iQyxjQUFZLEVBQUUsY0FQRDtBQVFiRSxzQkFBb0IsRUFBRSxzQkFSVDtBQVNiRSxvQkFBa0IsRUFBRSxvQkFUUDtBQVViQyxpQkFBZSxFQUFFLGlCQVZKO0FBV2JFLHlCQUF1QixFQUFFLHlCQVhaO0FBWWJFLHVCQUFxQixFQUFFO0FBWlYsQ0FBZixFOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCB7IHByb2R1Y3RzQWRkIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvcHJvZHVjdHNcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuXHJcbmNsYXNzIEFkZFByb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBjb2xvcjogXCJcIixcclxuICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgIGNyZWF0ZWRCeTogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgIGNvbnN0IGNyZWF0ZU5ld1Byb2R1Y3RCdG4gPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hQcm9kdWN0c0FkZCh0aGlzLnN0YXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDM+0JTQvtCx0LDQstC40YLRjCDQv9GA0L7QtNGD0LrRgjwvaDM+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwi0JLQstC10LTQuNGC0LUg0LjQvNGPXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwi0JrQsNGC0LXQs9C+0YDQuNGPXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnk6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuICAgICAgICAgICAgbGFiZWw9XCLQptCy0LXRglwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvbG9yOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3JlYXRlZEJ5OiBOdW1iZXIoZS50YXJnZXQudmFsdWUpIH0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmRlYWxlcnMgJiZcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWFsZXJzLm1hcCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtlbGVtZW50LmNyZWF0ZWRCeS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIHtlbGVtZW50LmNyZWF0ZWRCeS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjcmVhdGVOZXdQcm9kdWN0QnRufVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDQodC+0LfQtNCw0YLRjFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICBkaXNwYXRjaFByb2R1Y3RzQWRkOiBwcm9kdWN0c0FkZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShBZGRQcm9kdWN0KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHByb2R1Y3RzRGVsZXRlT25lIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvcHJvZHVjdHNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcblxyXG5jbGFzcyBEZWxldGVQcm9kdWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBkZWxldGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoUHJvZHVjdHNEZWxldGVPbmUodGhpcy5wcm9wcy5pZCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2RlbGV0ZUhhbmRsZXJ9PlxyXG4gICAgICAgICAg0KPQtNCw0LvQuNGC0YxcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gIGRpc3BhdGNoUHJvZHVjdHNEZWxldGVPbmU6IHByb2R1Y3RzRGVsZXRlT25lLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERlbGV0ZVByb2R1Y3QpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdExpc3RcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgxPtCf0YDQvtC00YPQutGC0Ys8L2gxPlxyXG4gICAgICA8UHJvZHVjdExpc3QgLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvbXBvc2UgZnJvbSBcInJlY29tcG9zZS9jb21wb3NlXCI7XHJcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XHJcbmltcG9ydCB7IGdldFByb2R1Y3RRdWVyeSB9IGZyb20gXCIuLi9xdWVyaWVzL3F1ZXJpZXNcIjtcclxuaW1wb3J0IFVwZGF0ZVByb2R1Y3QgZnJvbSBcIi4vdXBkYXRlUHJvZHVjdFwiO1xyXG5cclxuY2xhc3MgUHJvZHVjdERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBjb2xvcjogXCJcIixcclxuICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgIGNyZWF0ZWRCeTogXCJcIixcclxuICAgICAgZm9ybTogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiOTAlXCIsIG1hcmdpbjogXCIyMHB4IGF1dG9cIiwgcGFkZGluZzogXCIydmhcIiB9fT5cclxuICAgICAgICA8aDI+0JTQtdGC0LDQu9C4INC/0YDQvtC00YPQutGC0LA8L2gyPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLnByb2R1Y3QgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoND7QndCw0LfQstCw0L3QuNC1OiB7dGhpcy5wcm9wcy5kYXRhLnByb2R1Y3QubW9kZWxfbmFtZX0gPC9oND5cclxuICAgICAgICAgICAgICA8ZGl2PtCa0LDRgtC10LPQvtGA0LjRjzoge3RoaXMucHJvcHMuZGF0YS5wcm9kdWN0Lm1vZGVsX2NhdGVnb3J5fSA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PtCh0L7Qt9C00LDRgtC10LvRjDoge3RoaXMucHJvcHMuZGF0YS5wcm9kdWN0LmNyZWF0ZWRCeS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICDQktC+0LfRgNCw0YHRgiDQv9GA0L7QuNC30LLQvtC00LjRgtC10LvRjzoge3RoaXMucHJvcHMuZGF0YS5wcm9kdWN0LmNyZWF0ZWRCeS5hZ2V9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9ybTogIXRoaXMuc3RhdGUuZm9ybSB9KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuZm9ybSA/IFwi0JfQsNC60YDRi9GC0YxcIiA6IFwi0JjQt9C80LXQvdC40YLRjFwifVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmZvcm0gJiYgKFxyXG4gICAgICAgICAgPFVwZGF0ZVByb2R1Y3RcclxuICAgICAgICAgICAgdXNlckRhdGE9e3RoaXMucHJvcHMuZGF0YS5wcm9kdWN0fVxyXG4gICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5wcm9kdWN0SWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoZ2V0UHJvZHVjdFF1ZXJ5LCB7XHJcbiAgb3B0aW9uczogKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICBpZDogcHJvcHMucHJvZHVjdElkLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9LFxyXG59KShQcm9kdWN0RGV0YWlscyk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgcHJvZHVjdHNGZXRjaFN0YXJ0IH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvcHJvZHVjdHNcIjtcclxuXHJcbmltcG9ydCBEZWxldGVQcm9kdWN0IGZyb20gXCIuL2RlbGV0ZVByb2R1Y3RcIjtcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gXCIuL3Byb2R1Y3REZXRhaWxzXCI7XHJcbmltcG9ydCBBZGRQcm9kdWN0IGZyb20gXCIuL2FkZFByb2R1Y3RcIjtcclxuXHJcbmNsYXNzIFByb2R1Y3RMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2VsZWN0ZWQ6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoUHJvZHVjdHNGZXRjaFN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RoaXMucHJvcHMubG9hZGVyICYmIDxkaXY+0JfQsNCz0YDRg9C30LrQsC4uLjwvZGl2Pn1cclxuICAgICAgICB7dGhpcy5wcm9wcy5wcm9kdWN0cyAmJiAoXHJcbiAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb2R1Y3RzLm1hcCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiODAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMyJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiBlbGVtZW50LmlkIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5tb2RlbF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMiVcIiB9fT57ZWxlbWVudC5tb2RlbF9jYXRlZ29yeX08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxEZWxldGVQcm9kdWN0IHN0eWxlPXt7IHdpZHRoOiBcIjMyJVwiIH19IGlkPXtlbGVtZW50LmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge3RoaXMuc3RhdGUuc2VsZWN0ZWQgJiYgKFxyXG4gICAgICAgICAgPFByb2R1Y3REZXRhaWxzIHByb2R1Y3RJZD17dGhpcy5zdGF0ZS5zZWxlY3RlZH0gLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8QWRkUHJvZHVjdCBkZWFsZXJzPXt0aGlzLnByb3BzLnByb2R1Y3RzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLnByb2R1Y3RzLFxyXG4gICAgbG9hZGVyOiBzdGF0ZS5wcm9kdWN0cy5sb2FkZXIsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICBkaXNwYXRjaFByb2R1Y3RzRmV0Y2hTdGFydDogcHJvZHVjdHNGZXRjaFN0YXJ0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvZHVjdExpc3QpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgcHJvZHVjdHNVcGRhdGUgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9wcm9kdWN0c1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuXHJcbmNsYXNzIFVwZGF0ZVByb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpZDogTnVtYmVyKHRoaXMucHJvcHMuaWQpLFxyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBjb2xvcjogXCJcIixcclxuICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgIGNyZWF0ZWRCeTogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHVwZGF0ZVByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoUHJvZHVjdHNVcGRhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J3QvtCy0L7QtSDQuNC80Y9cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J3QvtCy0LDRjyDQmtCw0YLQtdCz0L7RgNC40Y9cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCd0L7QstGL0Lkg0YbQstC10YJcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBjb2xvcjogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCd0L7QstGL0Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70YxcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyZWF0ZWRCeTogTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dXBkYXRlUHJvZHVjdH0+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICBkaXNwYXRjaFByb2R1Y3RzVXBkYXRlOiBwcm9kdWN0c1VwZGF0ZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShVcGRhdGVQcm9kdWN0KTtcclxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcImFwb2xsby1ib29zdFwiO1xyXG5cclxuY29uc3QgZ2V0UHJvZHVjdHNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBwcm9kdWN0cyB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG1vZGVsX25hbWVcclxuICAgICAgbW9kZWxfY29sb3JcclxuICAgICAgbW9kZWxfY2F0ZWdvcnlcclxuICAgICAgY3JlYXRlZEJ5IHtcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0RGVhbGVyc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIGRlYWxlcnMge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGFnZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGFkZFByb2R1Y3RRdWVyeSA9IGdxbGBcclxuICBtdXRhdGlvbihcclxuICAgICRuYW1lOiBTdHJpbmchXHJcbiAgICAkY2F0ZWdvcnk6IFN0cmluZyFcclxuICAgICRjb2xvcjogU3RyaW5nIVxyXG4gICAgJGNyZWF0ZWRCeTogSUQhXHJcbiAgKSB7XHJcbiAgICBhZGRQcm9kdWN0KFxyXG4gICAgICBuYW1lOiAkbmFtZVxyXG4gICAgICBjYXRlZ29yeTogJGNhdGVnb3J5XHJcbiAgICAgIGNvbG9yOiAkY29sb3JcclxuICAgICAgY3JlYXRlZEJ5OiAkY3JlYXRlZEJ5XHJcbiAgICApIHtcclxuICAgICAgbW9kZWxfbmFtZVxyXG4gICAgICBtb2RlbF9jYXRlZ29yeVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGRlbGV0ZVByb2R1Y3QgPSBncWxgXHJcbiAgbXV0YXRpb24oJGlkOiBJRCEpIHtcclxuICAgIGRlbGV0ZVByb2R1Y3QoaWQ6ICRpZCkge1xyXG4gICAgICBtb2RlbF9uYW1lXHJcbiAgICAgIG1vZGVsX2NhdGVnb3J5XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0UHJvZHVjdFF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBwcm9kdWN0KGlkOiAkaWQpIHtcclxuICAgICAgbW9kZWxfbmFtZVxyXG4gICAgICBtb2RlbF9jYXRlZ29yeVxyXG4gICAgICBtb2RlbF9jb2xvclxyXG4gICAgICBjcmVhdGVkQnkge1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHVwZGF0ZVByb2R1Y3RzUXVlcnkgPSBncWxgXHJcbiAgbXV0YXRpb24oXHJcbiAgICAkaWQ6IElEIVxyXG4gICAgJG5hbWU6IFN0cmluZyFcclxuICAgICRjYXRlZ29yeTogU3RyaW5nIVxyXG4gICAgJGNvbG9yOiBTdHJpbmchXHJcbiAgICAkY3JlYXRlZEJ5OiBJRCFcclxuICApIHtcclxuICAgIHVwZGF0ZVByb2R1Y3QoXHJcbiAgICAgIGlkOiAkaWRcclxuICAgICAgbmFtZTogJG5hbWVcclxuICAgICAgY2F0ZWdvcnk6ICRjYXRlZ29yeVxyXG4gICAgICBjb2xvcjogJGNvbG9yXHJcbiAgICAgIGNyZWF0ZWRCeTogJGNyZWF0ZWRCeVxyXG4gICAgKSB7XHJcbiAgICAgIG1vZGVsX25hbWVcclxuICAgICAgbW9kZWxfY2F0ZWdvcnlcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQge1xyXG4gIGdldFByb2R1Y3RzUXVlcnksXHJcbiAgZ2V0RGVhbGVyc1F1ZXJ5LFxyXG4gIGFkZFByb2R1Y3RRdWVyeSxcclxuICBkZWxldGVQcm9kdWN0LFxyXG4gIGdldFByb2R1Y3RRdWVyeSxcclxuICB1cGRhdGVQcm9kdWN0c1F1ZXJ5LFxyXG59O1xyXG4iLCJpbXBvcnQgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzRmV0Y2hTdGFydCA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUFJPRFVDVFNfRkVUQ0hfU1RBUlQsIHBheWxvYWQgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c0ZldGNoU3VjY2VzcyA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUFJPRFVDVFNfRkVUQ0hfU1VDQ0VTUywgcGF5bG9hZCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzRmV0Y2hFcnJvciA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUFJPRFVDVFNfRkVUQ0hfRVJST1IsIHBheWxvYWQgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c0RlbGV0ZU9uZSA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUFJPRFVDVFNfREVURUxFX09ORSwgcGF5bG9hZCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzRGVsZXRlT25lU3VjY2VzcyA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUFJPRFVDVFNfREVURUxFX09ORV9TVUNDRVNTLCBwYXlsb2FkIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNEZWxldGVPbmVFcnJvciA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUFJPRFVDVFNfREVURUxFX09ORV9FUlJPUiwgcGF5bG9hZCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzQWRkID0gKHBheWxvYWQpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5QUk9EVUNUU19BREQsIHBheWxvYWQgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c0FkZFN1Y2Nlc3MgPSAocGF5bG9hZCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlBST0RVQ1RTX0FERF9TVUNDRVNTLCBwYXlsb2FkIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNBZGRFcnJvciA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUFJPRFVDVFNfQUREX0VSUk9SLCBwYXlsb2FkIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNVcGRhdGUgPSAocGF5bG9hZCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwi0K3QutGI0LXQvVwiKTtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5QUk9EVUNUU19VUERBVEUsIHBheWxvYWQgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c1VwZGF0ZVN1Y2Nlc3MgPSAocGF5bG9hZCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlBST0RVQ1RTX1VQREFURV9TVUNDRVNTLCBwYXlsb2FkIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNVcGRhdGVFcnJvciA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUFJPRFVDVFNfVVBEQVRFX0VSUk9SLCBwYXlsb2FkIH07XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBQUk9EVUNUU19GRVRDSF9TVEFSVDogXCJQUk9EVUNUU19GRVRDSF9TVEFSVFwiLFxyXG4gIFBST0RVQ1RTX0ZFVENIX1NVQ0NFU1M6IFwiUFJPRFVDVFNfRkVUQ0hfU1VDQ0VTU1wiLFxyXG4gIFBST0RVQ1RTX0ZFVENIX0VSUk9SOiBcIlBST0RVQ1RTX0ZFVENIX0VSUk9SXCIsXHJcbiAgUFJPRFVDVFNfREVURUxFX09ORTogXCJQUk9EVUNUU19ERVRFTEVfT05FXCIsXHJcbiAgUFJPRFVDVFNfREVURUxFX09ORV9TVUNDRVNTOiBcIlBST0RVQ1RTX0RFVEVMRV9TVUNDRVNTXCIsXHJcbiAgUFJPRFVDVFNfREVURUxFX09ORV9FUlJPUjogXCJQUk9EVUNUU19ERVRFTEVfRVJST1JcIixcclxuICBQUk9EVUNUU19BREQ6IFwiUFJPRFVDVFNfQUREXCIsXHJcbiAgUFJPRFVDVFNfQUREX1NVQ0NFU1M6IFwiUFJPRFVDVFNfQUREX1NVQ0NFU1NcIixcclxuICBQUk9EVUNUU19BRERfRVJST1I6IFwiUFJPRFVDVFNfQUREX0VSUk9SXCIsXHJcbiAgUFJPRFVDVFNfVVBEQVRFOiBcIlBST0RVQ1RTX1VQREFURVwiLFxyXG4gIFBST0RVQ1RTX1VQREFURV9TVUNDRVNTOiBcIlBST0RVQ1RTX1VQREFURV9TVUNDRVNTXCIsXHJcbiAgUFJPRFVDVFNfVVBEQVRFX0VSUk9SOiBcIlBST0RVQ1RTX1VQREFURV9FUlJPUlwiLFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1ib29zdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcG9sbG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVjb21wb3NlL2NvbXBvc2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==