const { DataTypes } = require("sequelize");

const Event = (sequelize) => {
    const Event = sequelize.define('Event', {
        day: {
            type: DataTypes.INTEGER,
            allowNull: true,
            default: null
        },
        month: {
            type: DataTypes.INTEGER,
            allowNull: true,
            default: null
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        posted: {
            type: DataTypes.STRING,
            allowNull: false,
            default: false
        }
    });
    return Event;
}

module.exports = { Event };