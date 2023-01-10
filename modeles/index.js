const connection = require("./db");
const User = require("./user");
const Types = require("./types");
const Pokemon = require("./pokemon");
const Region = require("./regions");

module.exports = {
  connection,
  User,
  Types,
  Pokemon,
  Region
};
