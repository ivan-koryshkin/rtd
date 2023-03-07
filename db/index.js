const { Sequelize, DataTypes } = require('sequelize');
const envConfig = require('../config'); 
const { User } = require('./User');
const { Post } = require('./Post');
const { Config } = require('./Config');
const { Event } = require('./Event');
const UserService = require('./UserService');
const EventService = require('./EventService');

function dbUri() {
    let uri = 'postgres://'
    uri += `${envConfig.DBUSER}:${envConfig.DBPASS}@`
    uri += `${envConfig.DBHOST}:${envConfig.DBPORT}/`
    uri += `${envConfig.DBNAME}`
    return uri;
}

console.log(dbUri())
const sequelize = new Sequelize(dbUri());
const db = {
    User: User(sequelize),
    Post: Post(sequelize),
    Config: Config(sequelize),
    Event: Event(sequelize),
    sequelize: sequelize,
    service: {
        UserService: UserService(sequelize),
        EventService: EventService(sequelize)
    }
}
module.exports = db;