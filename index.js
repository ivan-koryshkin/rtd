const { Telegraf } = require('telegraf');
const config = require('./config')
const db = require('./db');
const message = require('./message');
const fsutils = require('./fsutils')

/**
 * drink - What Today
 * picbd - On Birthday
 * picbro - To friend
 * picdt - To dauther
 * picgdpa - To grandpa
 * picnana - To nana
 * picwintermood - winter mood
 * pickurban - On Kurban
 * picramadan - On Ramadan
 * piceaster - On Easter
 * 
 * drink - Праздник сегодня
 * picbro - для Друга
 * picdt - для Дочки
 * picwintermood - Зимнее настроение
 * pickurban - Курбан байрам
 * picramadan - Месяц рамадан
 * piceaster - На Пасху
 * picbd - На ДР
 * picgdpa - для Дудушки
 * picnana - для Бабушки
 * picwomansday - 8 марта
 */

const PICS = {
    picbd: config.IMG_BIRTHDAY,
    picbro: config.IMG_BROTHER,
    picdt: config.IMG_DAUGHTER,
    picfrend: config.IMG_FRIENDS,
    picgdpa: config.IMG_GRANDPA,
    picnana: config.IMG_NANA,
    picwintermood: config.IMG_WINTER_EVENING,
    pickurban: config.IMG_KURBAN,
    picramadan: config.IMG_RAMADAN,
    piceaster: config.IMG_EASTER,
    picwomansday: config.IMG_WOMEN_DAY
}

const picCommands = Object.keys(PICS)
const picDirs = Object.values(PICS)

const main = async () => {
    await db.sequelize.authenticate()
    await db.sequelize.sync()
    const bot = new Telegraf(config.TOKEN);

    bot.start(async (ctx) => {
        // Save user in db if not exists
        // if user exists, update user's data
        await db.service.UserService.createUserIfNotExists(ctx)
        ctx.reply(`Hi ${ctx.from.first_name}`) 
    });

    bot.command('drink', async (ctx) => {
        const event = await db.service.EventService.getRandomEvent();
        ctx.telegram.sendMessage(ctx.chat.id, message.eventToMessage(event));
    });

    bot.command(picCommands, async (ctx) => {
        let command = ctx.update.message.text.replace('/', '');
        fsutils.sendRandomFile(ctx, PICS[command])
    })

    bot.action(picDirs, async (ctx) => {
        const imgDir = ctx.update.callback_query.data;
        fsutils.sendRandomFile(ctx, imgDir);
    })
    bot.launch();
}

main().catch((err) => console.log(err))