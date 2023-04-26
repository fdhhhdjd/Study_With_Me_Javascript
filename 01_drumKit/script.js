/**
 * @author Nguyễn Tiến Tài
 * @created_at 26/04/2023
 * @description Step 01 Drum kit
 */

//* Remove Transaction
function removeTransition(e) {
    // If the property name is not 'transform', skip the function
    if (e.propertyName != 'transform') return;
    // Remove the 'playing' class from the element
    this.classList.remove('playing');
}

//* Play Sound
function playSound(e) {
    // Log the event object
    // Select the audio element with the corresponding data-key attribute
    const audio = document.querySelector(`audio[data-key="${e.which}"]`);
    // Select the key element with the corresponding data-key attribute
    const key = document.querySelector(`.key[data-key="${e.which}"]`);
    // If there is no audio element, exit the function
    if(!audio) return; 
    // Set the current time of the audio element to 0
    audio.currentTime = 0;
    // Play the audio element
    audio.play(); 
    // Add the 'playing' class to the key element
    key.classList.add('playing');
}

//* Add event listeners
const keys = document.querySelectorAll('.key');
// For each key element, add an event listener for the 'transitionend' event
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// Add an event listener for the 'keydown' event on the window object
window.addEventListener('keydown', playSound);

