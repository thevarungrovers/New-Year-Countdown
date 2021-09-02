// JavaScript
let d = new Date();

// current year
let currentYear = d.getFullYear();

// next year
let nextYear = (currentYear + 1).toString(); // converting the integer to string

// setting the next year
document.getElementById('new-year').innerHTML = nextYear;

// calculating next year countdown
let nextYearDate = 'Jan 1, ' + nextYear + ' 00:00:00';

let target = new Date(nextYearDate).getTime();



var x = setInterval(function () {
    // present time
    let now = new Date().getTime();

    // difference between now and target
    let diff = target - now;
    // let diff = -1;

    // calculating left time
    let days = Math.floor(diff / (1000 * 60 * 60 *24)); // gives days
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 *60)); // giver  hours
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // gives minutes
    let seconds = Math.floor((diff % (1000 * 60)) / 1000); // gives  seconds

    document.getElementById("leftDays").innerHTML = days
    document.getElementById("leftHours").innerHTML = hours
    document.getElementById("leftMinutes").innerHTML = minutes
    document.getElementById("leftSeconds").innerHTML = seconds

    // on time completion say - HAPPY NEW YEAR
        if(diff < 0){
            clearInterval(x);
            document.querySelector('.time').innerHTML = "HAPPY NEW YEAR";
        }

},1000); // for 1 second?