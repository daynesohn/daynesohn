// Set the date we're counting down to
var countDownDate = new Date("Mar 30, 2017 12:15:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  // If the countdown is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "RIP Jimenez";
  }
}, 1000);


function setTextColor()
{
    window.setTimeout( "setTextColor()", 1000); //  milliseconds delay

    var index = Math.round(Math.random() * 16);

    var colorValue = "#000000"; // default color - white (index = 0)

    if (index === 1) {
      colorValue = "#1abc9c";
    } else if (index === 2) {
      colorValue = "#16a085";
    } else if (index === 3) {
      colorValue = "#2ecc71";
    } else if (index === 4) {
      colorValue = "#27ae60";
    } else if (index === 5) {
      colorValue = "#3498db";
    } else if (index === 6) {
      colorValue = "#2980b9";
    } else if (index === 7) {
      colorValue = "#9b59b6";
    } else if (index === 8) {
      colorValue = "#8e44ad";
    } else if (index === 9) {
      colorValue = "#34495e";
    } else if (index === 10) {
      colorValue = "#2c3e50";
    } else if (index === 11) {
      colorValue = "#f1c40f";
    } else if (index === 12) {
      colorValue = "#f39c12";
    } else if (index === 13) {
      colorValue = "#e67e22";
    } else if (index === 14) {
      colorValue = "#d35400";
    } else if (index === 15) {
      colorValue = "#e74c3c";
    } else {
      colorValue = "#c0392b";
    };

    document.getElementById("content").style["text-shadow"] = "6px 6px 0px " + colorValue;
};

setTextColor();
