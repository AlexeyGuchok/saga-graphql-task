import React, { Component } from "react";

import { connect } from "react-redux";
import { productsFetchStart } from "../redux/actions/products";

import DeleteProduct from "./deleteProduct";
import ProductDetails from "./productDetails";
import AddProduct from "./addProduct";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  componentDidMount() {
    this.props.dispatchProductsFetchStart();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.loader && <div>Загрузка...</div>}
        {this.props.products && (
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              height: "auto",
            }}
          >
            {this.props.products.map((element) => {
              return (
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    margin: "auto",
                  }}
                >
                  <div
                    style={{ width: "32%" }}
                    onClick={() => {
                      this.setState({ selected: element.id });
                    }}
                  >
                    {element.model_name}
                  </div>
                  <div style={{ width: "32%" }}>{element.model_category}</div>

                  <DeleteProduct style={{ width: "32%" }} id={element.id} />
                </li>
              );
            })}
          </ul>
        )}

        {this.state.selected && (
          <ProductDetails productId={this.state.selected} />
        )}

        <AddProduct dealers={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    loader: state.products.loader,
  };
};

const mapDispatchToProps = {
  dispatchProductsFetchStart: productsFetchStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
