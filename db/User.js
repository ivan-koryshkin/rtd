const {DataTypes} = require('sequelize');

const User = (sequelize) => {
    const UserModel = sequelize.define('User', {
        telegramId: {
            primaryKey: true,
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isBot: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        lang: {
            type: DataTypes.STRING,
            allowNull: true
        },
        chatId: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    });
    return UserModel;
}

module.exports = { User };