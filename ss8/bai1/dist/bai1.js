"use strict";
var weekDays;
(function (weekDays) {
    weekDays["Monday"] = "Monday";
    weekDays["Tuesday"] = "Tuesday";
    weekDays["Wendnesday"] = "Wendnesday";
    weekDays["Thursday"] = "Thursday";
    weekDays["Friday"] = "Friday";
    weekDays["Saturday"] = "Saturday";
    weekDays["Sunday"] = "Sunday";
})(weekDays || (weekDays = {}));
console.log(weekDays.Monday);
console.log(weekDays.Tuesday);
console.log(weekDays.Wendnesday);
console.log(weekDays.Thursday);
console.log(weekDays.Saturday);
console.log(weekDays.Friday);
console.log(weekDays.Sunday);
