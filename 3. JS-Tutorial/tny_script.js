/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Jacques Valentine
   Date:   2025-10-02

*/

//Display current date & time
document.getElementById("dateNow").innerHTML = "m/d/y<br />h:m:s";

//Display the time left until New Years Eve Bash
document.getElementById('days').textContent = "dd";
document.getElementById('hrs').textContent = "hh";
document.getElementById('mins').textContent = "mm";
document.getElementById('secs').textContent = "ss";

//Store the current date and time
var currentDate = new Date();