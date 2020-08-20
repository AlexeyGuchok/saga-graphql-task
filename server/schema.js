const graphql = require("graphql");
const Product = require("../models/Product");
const Dealer = require("../models/Dealer");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    model_name: { type: GraphQLString },
    model_category: { type: GraphQLString },
    model_color: { type: GraphQLString },
    createdBy: {
      type: DealerType,
      resolve(parent, args) {
        return Dealer.findOne({ where: { id: parent.createdBy } });
      },
    },
  }),
});

const ProductUpdateType = new GraphQLObjectType({
  name: "ProductUpdate",
  fields: () => ({
    id: { type: GraphQLID },
    model_name: { type: GraphQLString },
    model_category: { type: GraphQLString },
    model_color: { type: GraphQLString },
    createdBy: {
      type: DealerType,
      resolve(parent, args) {
        return Dealer.findOne({ where: { id: parent.createdBy } });
      },
    },
  }),
});

const DealerType = new GraphQLObjectType({
  name: "Dealer",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.findAll({ where: { createdBy: parent.id } });
      },
    },
  }),
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return products.find((product) => product.id == args.id);
        return Product.findOne({ where: { id: args.id } });
      },
    },

    dealer: {
      type: DealerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Dealer.findOne({ where: { id: args.id } });
      },
    },

    products: {
      type: new GraphQLList(ProductType),
      async resolve(parent, args) {
        const prod = await Product.findAll({});
        return prod;
      },
    },

    dealers: {
      type: new GraphQLList(DealerType),
      resolve(parent, args) {
        return Dealer.findAll({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutatuion",
  fields: {
    addDealer: {
      type: DealerType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const dealer = Dealer.create({ name: args.name, age: args.age });
        return dealer;
      },
    },

    deleteDealer: {
      type: DealerType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        const dealer = Dealer.destroy({ where: { id: args.id } });
        return dealer;
      },
    },

    updateDealer: {
      type: DealerType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const dealer = Dealer.update(
          { name: args.name, age: args.age },
          { where: { id: args.id } }
        );
        return dealer;
      },
    },

    addProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        color: { type: GraphQLString },
        createdBy: { type: GraphQLID },
      },
      async resolve(parent, args) {
        const product = await Product.create({
          model_name: args.name,
          model_category: args.category,
          model_color: args.color,
          createdBy: args.createdBy,
        });

        return product;
      },
    },

    deleteProduct: {
      type: ProductType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        Product.destroy({ where: { id: args.id } });
      },
    },

    updateProduct: {
      type: ProductUpdateType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        color: { type: GraphQLString },
        createdBy: { type: GraphQLID },
      },
      async resolve(parent, args) {
        console.log(args);
        const updatedNumber = await Product.update(
          {
            model_name: args.name,
            model_category: args.category,
            model_color: args.color,
            createdBy: args.createdBy,
          },
          { where: { id: args.id } }
        );
        const dealer = await Product.findOne({ where: { id: args.id } });

        return dealer;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
