import axios from "axios";
const graphQLUrl = "/graphql";

class ProductsService {
  constructor(url) {
    this.sender = axios.create({
      baseURL: url,
      withCredentials: true,
    });
  }

  getProductsQuery = async () => {
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
          }`,
    });
    return data.data;
  };

  deleteProductQuery = async (id) => {
    const name = "deleteProduct";
    const data = await this.sender.post("", {
      query: `
        mutation {
          ${name}(id: ${id}) {
            id
          }
      }
    `,
    });
    return data;
  };

  addProductQuery = async (userData) => {
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
    `,
    });
    console.log(data);
    return data;
  };

  updatePoductQuery = async (userData) => {
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

    `,
    });
    console.log(data, " +++++++");
    return data;
  };
}

export default new ProductsService(graphQLUrl);
