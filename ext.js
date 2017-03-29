// note that all prior code is saved within tested.js
/*
var pointer = document.getElementsByClassName('modifier');

pointer.addEventListener("mouseover", function (event) {
	event.target.style.color = "yellow";
}, false);

pointer.addEventListener('mouseleave', function (event) {
	event.target.style.color = 'white';
}, false );
*/

var minutes, seconds;
var audio = new Audio('beep-06.mp3');
var timerOn = true;
var beep = true;
var timerType = 'work';
var breakMinutes = document.getElementById('break-length');
var workMinutes = document.getElementById('work-length');
var breakSeconds = document.getElementById('break-seconds');
var workSeconds = document.getElementById('work-seconds');

//start button click controller
function startTimer() {
	clearInterval(seconds);
	//stop(audio);
	timerType = 'work';
	timerOn = true;
	seconds = setInterval(timer, 1000);
}

//setInterval helper function for startTimer()
function timer() {
	if (timerType == 'work' && timerOn === true) { 
		if (workSeconds.innerHTML == 0 && workMinutes.innerHTML > 0) {
			workSeconds.innerHTML = 59;
			workMinutes.innerHTML --;		
		} else if (workSeconds.innerHTML > 0 && workMinutes.innerHTML >= 0) {
			workSeconds.innerHTML --;
		} else if (workSeconds.innerHTML == 0 && workMinutes.innerHTML == 0) {
			audio.play();
			timerType = 'break';
		} 
	} else if (timerType == 'break' && timerOn === true) {
		if (breakSeconds.innerHTML == 0 && breakMinutes.innerHTML > 0) {
			breakSeconds.innerHTML = 59;
			breakMinutes.innerHTML --;		
		} else if (breakSeconds.innerHTML > 0 && breakMinutes.innerHTML >= 0) {
			breakSeconds.innerHTML --;
		} else if (breakSeconds.innerHTML == 0 && breakMinutes.innerHTML == 0) {
			timerType = 'work';
			clearInterval(seconds);
		}		
	}
}

//break time controllers
function breakDown() {
	timerOn = false;
	breakSeconds.innerHTML = 0;
	workSeconds.innerHTML = 0;
	var value = document.getElementById('break-length');
	if (value.innerHTML > 0){
		value.innerHTML --;
	}
	
}

function breakUp() {
	timerOn = false;
	breakSeconds.innerHTML = 0;
	workSeconds.innerHTML = 0;
	var value = document.getElementById('break-length');
	value.innerHTML ++;
}

//work time controllers
function workDown() {
	timerOn = false;
	breakSeconds.innerHTML = 0;
	workSeconds.innerHTML = 0;
	var value = document.getElementById('work-length');
	if (value.innerHTML > 0){
		value.innerHTML --;
	}
}

function workUp() {
	timerOn = false;
	breakSeconds.innerHTML = 0;
	workSeconds.innerHTML = 0;
	var value = document.getElementById('work-length');
	value.innerHTML ++;
}


/*
 * 
 */
