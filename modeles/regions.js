const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Region extends Model {}

Region.init(
    {
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize: connection,
        timestamps: false,
        tableName: "region"
    }
);

module.exports = Region;