const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

days.pop(-1);
days.unshift('Sunday')

let weekdays = days.splice(1, 5);

let week = [];
week.push(weekdays.sort());
week.push(days.sort());

//Remove weekends
week.pop(1);

console.log(week);