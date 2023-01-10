const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Region extends Model {}

Region.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize: db_conn,
        timestamps: false
    }
);

module.exports = Region;