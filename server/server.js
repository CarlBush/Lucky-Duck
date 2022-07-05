const express = require("express");

// import ApolloServer
const {ApolloServer} = require('apollo-server-express')

// import typeDefs and resolvers
const {typeDefs, resolvers} = require('./schemas');
const db = require('./config/connection')

const PORT = process.env.PORT || 3001;
const { authMiddleware } = require("./utils/auth");
// create a new apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

const mongoose = require("mongoose");
// const db = require('./config/connection');
const dotenv = require("dotenv");

// const pinRoute = require("./routes/pins");
// const userRoute = require("./routes/users");

const app = express();
//const PORT = process.env.PORT || 8800;

dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// create a new instance of an apollo server with the graphql schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // integrate our apollo server with the express application as middleware
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server is running on port ${PORT}!`);
      // log where we can go to test our GQL API
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};


// app.use("/api/pins", pinRoute);
// app.use("/api/users", userRoute);

// db.once("open", () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//     });
//   });

startApolloServer(typeDefs, resolvers);