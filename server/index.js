const express = require("express");
const next = require("next");
const PORT = process.env.PORT || 4001;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const db = require("../database/db");
const cors = require("cors");

const { graphqlHTTP } = require("express-graphql");
const schema = require("../server/schema");

app
  .prepare()
  .then(() => {
    const server = express();
    const showRoutes = require("./routes/show.routes");

    server.use("/api", showRoutes);

    server.use(
      "/graphql",
      graphqlHTTP({
        schema: schema,
        graphiql: true,
      })
    );

    server.use(cors());

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
  });

async function start() {
  try {
    db.authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
      });
  } catch (e) {
    console.log("Error, ", e.message);
  }
}

start();
