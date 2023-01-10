const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Pokemon extends Model {}

Pokemon.init(
    {
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize: connection,
        timestamps: false,
        tableName: "pokemon"
    }
);

module.exports = Pokemon;