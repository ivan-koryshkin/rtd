const { Markup } = require('telegraf')
const randomFile = require('./randomFile');


module.exports = (ctx, dirName) => {
    const image = randomFile(dirName);
    ctx.telegram.sendMediaGroup(ctx.chat.id, [{
        type: 'photo',
        media: { source: image }
    }])
    .then(() => {
        ctx.reply("Нажмите чтобы получить другую картинку на эту тему", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Давай еще", callback_data: dirName }],
                ],
                resize: true
            }
        });
    })
    .catch((err) => console.log(err))
}