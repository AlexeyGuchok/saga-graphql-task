import React, { Component } from "react";
import { graphql } from "react-apollo";
import Button from "@material-ui/core/Button";
import { productsAdd } from "../redux/actions/products";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      color: "",
      category: "",
      createdBy: null,
    };
  }

  render() {
    console.log(this.props);
    const createNewProductBtn = () => {
      this.props.dispatchProductsAdd(this.state);
    };

    return (
      <div>
        <h3>Добавить продукт</h3>
        <div>
          <TextField
            id="standard-basic"
            label="Введите имя"
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="Категория"
            onChange={(e) => this.setState({ category: e.target.value })}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="Цвет"
            onChange={(e) => this.setState({ color: e.target.value })}
          />
        </div>
        <select
          onChange={(e) => this.setState({ createdBy: Number(e.target.value) })}
        >
          {this.props.dealers &&
            this.props.dealers.map((element) => {
              return (
                <option value={element.createdBy.id}>
                  {element.createdBy.name}
                </option>
              );
            })}
        </select>

        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={createNewProductBtn}
          >
            Создать
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  dispatchProductsAdd: productsAdd,
};

export default connect(null, mapDispatchToProps)(AddProduct);
