/**
 * @author Nguyễn Tiến Tài
 * @created_at 26/04/2023
 * @description Step 02 Clock
 */

// Selecting the hands of the clock
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Function to set the date and rotate the hands accordingly
function setDate () {
    const now = new Date();
    const offset = 90;

    // Setting the rotation of the second hand
    const seconds = now.getSeconds();
    const secondsDegrees = ((360 / 60) * seconds) + offset;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Setting the rotation of the minute hand
    const minutes = now.getMinutes();
    const minutesDegrees = ((360 / 60) * minutes) + offset;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // Setting the rotation of the hour hand
    const hours = now.getHours();
    const hoursDegrees = ((360 / 12) * (hours % 12)) + offset;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Calling the setDate function every second
setInterval(setDate, 1000);