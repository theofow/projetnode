const { connection } = require("./modeles");

connection
  .sync({
    alter: true,
  })
  .then(() => console.log("Database migrated"))
  .then(() => connection.close());