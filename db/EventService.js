const { Event } = require('./Event');


const EventService = (sequelize) => {
    return {
        async getRandomEvent() {
            const date = new Date(Date.now());
            const eventDay = date.getDate();
            const eventMonth = date.getMonth();
            const events = await Event(sequelize).findAll({
                where: {
                    day: eventDay,
                    month: eventMonth
                }
            });
            const randInd = Math.floor(Math.random() * events.length);
            return events[randInd];
        }
    }
}

module.exports = EventService;