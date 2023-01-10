const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Type extends Model {}

Type.init(
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
module.exports = Type;