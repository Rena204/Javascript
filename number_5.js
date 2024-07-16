const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const daysOfWeek = {};

en.forEach((day, index) => {
    daysOfWeek[day] = ru[index];
});

console.log(daysOfWeek);
