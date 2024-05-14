const bells = new Audio('./sounds/bell.wav');
const startBtn = document.querySelector('.btn-start');
const minuteDiv = document.querySelector('.minutes');
const secondDiv = document.querySelector('.seconds');
let myInterval;
let state = true;
let totalSeconds;  // Moved outside appTimer for broader scope

const appTimer = () => {
    const sessionAmount = parseInt(minuteDiv.textContent);

    if (state) {
        state = false;  // Prevent multiple interval triggers
        totalSeconds = sessionAmount * 60;  // Initialize totalSeconds

        myInterval = setInterval(updateSeconds, 1000);  // Call updateSeconds every second
    } else {
        alert('Session has already started.');
    }
};

const updateSeconds = () => {
    totalSeconds--;

    const minutesLeft = Math.floor(totalSeconds / 60);
    const secondsLeft = totalSeconds % 60;

    minuteDiv.textContent = minutesLeft;
    secondDiv.textContent = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

    if (totalSeconds <= 0) {
        clearInterval(myInterval);  // Stop the interval when time's up
        bells.play();  // Play sound
        state = true;  // Reset state for next session
    }
};

startBtn.addEventListener('click', appTimer);  // Attach event handler to button
