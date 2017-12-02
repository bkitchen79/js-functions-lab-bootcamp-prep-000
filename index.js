// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  name.toEqual("you")
  return "Happy holidays, ${name}!"
  name.toEqual("you")
}

function happyHolidayTo(holiday, name) {
  return "Happy ${holiday}, ${name}!"
}

function holidayCountdown(days, holiday) {
  return "It's ${days} days until ${holiday}!"
}

happyHolidaysTo("you")