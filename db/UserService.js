const { User } = require('./User');


const UserService = (sequelize) => {
    return {
        async createUserIfNotExists(ctx) {
            const user = await User(sequelize)
                .findOne({
                    where: {
                        telegramId: ctx.from.id
                    }
                })
            if(user === null) {
                await User(sequelize).create({
                    telegramId: ctx.from.id,
                    firstName: ctx.from.first_name,
                    lastName: ctx.from.last_name,
                    username: ctx.from.username,
                    isBot: ctx.from.is_bot,
                    lang: ctx.from.language_code,
                    chatId: ctx.chat.id
                })
            } else {
                await User(sequelize).update({
                    firstName: ctx.from.first_name,
                    lastName: ctx.from.last_name,
                    username: ctx.from.username,
                    lang: ctx.from.language_code,
                    chatId: ctx.chat.id
                }, {
                    where: {telegramId: ctx.from.id}
                })
            }
        }
    }
}

module.exports = UserService;