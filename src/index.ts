import { ApolloServer } from "apollo-server";
import { importSchema } from "graphql-import";
import { MongoClient } from "mongodb";
import { Sequelize } from "sequelize";
import { CustomerProvider, LogProvider } from "./datasources";
import { resolvers } from "./resolver";
import { Context } from "./types";

// Load env variables
require("dotenv").config();

// Mongo DB
const mongoConfig = process.env.MONGO_CONNECTION_STRING || "";
const mongoClient = new MongoClient(mongoConfig);
mongoClient.connect();

// MSSQL
const sequelize = new Sequelize({
  dialect: "mssql",
  dialectModulePath: "sequelize-msnodesqlv8",
  dialectOptions: {
    connectionString: process.env.COT_CONNECTION_STRING,
  },
});

const dataSources = (): Context["dataSources"] => ({
  customerProvider: new CustomerProvider(sequelize),
  logProvider: new LogProvider(mongoClient.db().collection("logs")),
});

const server = new ApolloServer({
  typeDefs: importSchema("./src/schema/schema.graphql"),
  // @ts-ignore
  resolvers,
  dataSources,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // tslint:disable-line no-console
});
