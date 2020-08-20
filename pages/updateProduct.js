import React, { Component } from "react";
import { connect } from "react-redux";
import { productsUpdate } from "../redux/actions/products";
import Button from "@material-ui/core/Button";

class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Number(this.props.id),
      name: "",
      color: "",
      category: "",
      createdBy: null,
    };
  }
  render() {
    const updateProduct = () => {
      console.log(this.state);
      this.props.dispatchProductsUpdate(this.state);
    };

    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Новое имя"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Новая Категория"
            onChange={(e) => this.setState({ category: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Новый цвет"
            onChange={(e) => this.setState({ color: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Новый производитель"
            onChange={(e) =>
              this.setState({ createdBy: Number(e.target.value) })
            }
          />
        </div>
        <button onClick={updateProduct}>Сохранить</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  dispatchProductsUpdate: productsUpdate,
};

export default connect(null, mapDispatchToProps)(UpdateProduct);
