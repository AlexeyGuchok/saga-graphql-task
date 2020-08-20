import React, { Component } from "react";
import compose from "recompose/compose";
import { graphql } from "react-apollo";
import { getProductQuery } from "../queries/queries";
import UpdateProduct from "./updateProduct";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      color: "",
      category: "",
      createdBy: "",
      form: false,
    };
  }
  render() {
    console.log(this.props);
    return (
      <div style={{ width: "90%", margin: "20px auto", padding: "2vh" }}>
        <h2>Детали продукта</h2>
        <div>
          {this.props.data.product && (
            <div>
              <h4>Название: {this.props.data.product.model_name} </h4>
              <div>Категория: {this.props.data.product.model_category} </div>
              <div>Создатель: {this.props.data.product.createdBy.name}</div>
              <div>
                Возраст производителя: {this.props.data.product.createdBy.age}
              </div>
            </div>
          )}
        </div>
        <button
          onClick={(e) => {
            this.setState({ form: !this.state.form });
          }}
        >
          {this.state.form ? "Закрыть" : "Изменить"}
        </button>
        {this.state.form && (
          <UpdateProduct
            userData={this.props.data.product}
            id={this.props.productId}
          />
        )}
      </div>
    );
  }
}

export default graphql(getProductQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.productId,
      },
    };
  },
})(ProductDetails);
