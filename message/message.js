eventToMessage = (eventModel) => {
    if(eventModel === null) {
        return "Сегодня праздников нет :("
    }
    const date = new Date(Date.now());
    const dayStr = eventModel.day < 10 ? `0${eventModel.day}`: `${eventModel.day}`;
    const monStr = eventModel.month < 10 ? `0${eventModel.month}`: `${eventModel.month}`;
    const msgTitle = `${dayStr}.${monStr}.${date.getFullYear()}`;
    return `${msgTitle}\n${eventModel.name}\n${eventModel.description}`
}

module.exports = eventToMessage;