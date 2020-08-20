import React, { Component } from "react";
import { connect } from "react-redux";
import { productsDeleteOne } from "../redux/actions/products";
import Button from "@material-ui/core/Button";

class DeleteProduct extends Component {
  render() {
    const deleteHandler = () => {
      this.props.dispatchProductsDeleteOne(this.props.id);
    };
    return (
      <div>
        <Button variant="contained" color="secondary" onClick={deleteHandler}>
          Удалить
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  dispatchProductsDeleteOne: productsDeleteOne,
};

export default connect(null, mapDispatchToProps)(DeleteProduct);
