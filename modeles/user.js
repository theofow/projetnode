const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const bcrypt = require("bcryptjs");

class User extends Model {}

User.init(
  {
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    motdepasse: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "USER",
      validate: {
        isIn: [["USER", "ADMIN", "POKEMON"]],
    },
  },
  {
    sequelize: connection,
    timestamps: false,
  }
);

function hashPassword(user) {
  user.motdepasse = bcrypt.hashSync(user.motdepasse, bcrypt.genSaltSync());
}

User.addHook("beforeCreate", hashPassword);
User.addHook("beforeUpdate", (user, { fields }) => {
  if (fields.includes("motdepasse")) {
    hashPassword(user);
  }
});

module.exports = User;