const { DataTypes } = require("sequelize");

const Config = (sequelize) => {
    const ConfigModel = sequelize.define('Config', {
        key: {
            primaryKey: true,
            type: DataTypes.STRING,
            allowNull: false
        },
        value: {
            type: DataTypes.STRING,
            allowNull: true,
            default: null
        }
    });
    return ConfigModel;
}

module.exports = { Config };