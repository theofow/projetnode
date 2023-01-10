const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Type extends Model {}

Type.init(
    {
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize: connection,
        timestamps: false,
        tableName: "types"
    }
);
module.exports = Type;