require("dotenv").config();

module.exports = {
    TOKEN: process.env.TOKEN,
    DBHOST: process.env.POSTGRES_HOST,
    DBUSER: process.env.POSTGRES_USER,
    DBPASS: process.env.POSTGRES_PASSWORD,
    DBNAME: process.env.POSTGRES_DB,
    DBPORT: process.env.POSTGRES_PORT,
    // Image repository
    IMG_BIRTHDAY: process.env.IMAGES + "/birthday",   
    IMG_BROTHER: process.env.IMAGES + "/brother",   
    IMG_DAUGHTER: process.env.IMAGES + "/daughter",   
    IMG_EASTER: process.env.IMAGES + "/easter",   
    IMG_FRIENDS: process.env.IMAGES + "/friends",   
    IMG_GRANDPA: process.env.IMAGES + "/grandpa",   
    IMG_KURBAN: process.env.IMAGES + "/kurban",   
    IMG_NANA: process.env.IMAGES + "/nana",   
    IMG_RAMADAN: process.env.IMAGES + "/ramadan",   
    IMG_WINTER_EVENING: process.env.IMAGES + "/winter_evening", 
    IMG_WOMEN_DAY: process.env.IMAGES + '/womenday'
}