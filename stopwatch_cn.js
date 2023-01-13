// by using Vanilla JS
// .onload function we can use to perform some task as soon as the page finishes loading
window.onload = function () {
    //declaring the variables
    //document.getElementbyid here returns an Element object representing the element whose id property matches the specified string
    var seconds = 00;
    var role = 00;
    var appendrole = document.getElementById("role");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
  
    var Interval;
    // Execute a Js when a button is clicked, user clicks on element .onclick
    // clearInterval() method clears a timer set 
    // function expression
    buttonStart.onclick = function () {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    };
    //stop button function
    buttonStop.onclick = function () {
      clearInterval(Interval);
    };
  
    buttonReset.onclick = function () {
      clearInterval(Interval);
      role = "00";
      seconds = "00";
      //re-starting here
      appendrole.innerHTML = role;
      appendSeconds.innerHTML = seconds;
    };
    // intialized to 00 previously incrementing now
    function startTimer() {
      role++;
      //append() method inserts a set of  string objects after the last child of the Element
      if (role <= 9) {
        appendrole.innerHTML = "0" + role;
      }
  
      if (role > 9) {
        appendrole.innerHTML = role;
      }
      if (role > 99) {
        //getElementById
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        role = 0;
        appendrole.innerHTML = "0" + 0;
      }
  
      // if (role > 100) {
      //   console.log("seconds");
      //   seconds++;
      //   appendSeconds.innerHTML = "00" + seconds;
      //   role = 0;
      //   appendrole.innerHTML = "0" + 0;
      // }
  
      if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
      }
    }
  };
  