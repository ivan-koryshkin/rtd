const fs = require('fs');

module.exports = (dirName) => {
    const files = fs.readdirSync(dirName)
    const i = Math.floor(Math.random() * files.length);
    return `${dirName}/${files[i]}`;
}