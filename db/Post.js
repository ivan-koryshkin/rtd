const { DataTypes } = require("sequelize");

const Post = (sequelize) => {
    const PostModel = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        posted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false
        }
    });
    return PostModel;
}

module.exports = { Post };