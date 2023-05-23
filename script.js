const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const countdownDate = new Date('Jul 13, 2023 12:00:00').getTime();

function countdown() {
  var now = new Date().getTime();
  var difference = countdownDate - now;

  if (difference <= 0) {
    document.body.innerHTML = "<h1>Happy Birthday!</h1>";
    return;
  }

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = timeFormat(hours);
  minutesEl.innerHTML = timeFormat(minutes);
  secondsEl.innerHTML = timeFormat(seconds);

}

function timeFormat(time){
    return time < 10 ? (`0${time}`) : time;

}


setInterval(countdown, 1000);

countdown();



 
