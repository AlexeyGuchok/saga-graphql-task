import { gql } from "apollo-boost";

const getProductsQuery = gql`
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

const getDealersQuery = gql`
  query {
    dealers {
      id
      name
      age
    }
  }
`;

const addProductQuery = gql`
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

const deleteProduct = gql`
  mutation($id: ID!) {
    deleteProduct(id: $id) {
      model_name
      model_category
      id
    }
  }
`;

const getProductQuery = gql`
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

const updateProductsQuery = gql`
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

export {
  getProductsQuery,
  getDealersQuery,
  addProductQuery,
  deleteProduct,
  getProductQuery,
  updateProductsQuery,
};
