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
    window.setTimeout( "setTextColor()", 500); //  milliseconds delay

    var index = Math.round(Math.random() * 16);

    var ColorValue = "#000000"; // default color - white (index = 0)

    if(index === 1)
        ColorValue = "#1abc9c";
    if(index === 2)
        ColorValue = "#16a085";
    if(index === 3)
        ColorValue = "#2ecc71";
    if(index === 4)
        ColorValue = "#27ae60";
    if(index === 5)
        ColorValue = "#3498db";
    if(index === 6)
        ColorValue = "#2980b9";
    if(index === 7)
        ColorValue = "#9b59b6";
    if(index === 8)
        ColorValue = "#8e44ad";
    if(index === 9)
        ColorValue = "#34495e";
    if(index === 10)
        ColorValue = "#2c3e50";
    if(index === 11)
        ColorValue = "#f1c40f";
    if(index === 12)
        ColorValue = "#f39c12";
    if(index === 13)
        ColorValue = "#e67e22";
    if(index === 14)
        ColorValue = "#d35400";
    if(index === 15)
        ColorValue = "#e74c3c";
    if(index === 16)
        ColorValue = "#c0392b";

    document.getElementById("content").style["text-shadow"] = "6px 6px 0px " + ColorValue;
    document.getElementById("small").style["text-shadow"] = "6px 6px 0px " + ColorValue;
};

setTextColor();
