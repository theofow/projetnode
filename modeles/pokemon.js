const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Pokemon extends Model {}

Pokemon.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize: db_conn,
        timestamps: false
    }
);

module.exports = Pokemon;