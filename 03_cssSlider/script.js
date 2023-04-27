/**
 * @author Nguyễn Tiến Tài
 * @created_at 27/04/2023
 * @description Step 03 Css Slider
 */

// This code selects all input elements with class 'controls'
const inputs = document.querySelectorAll('.controls input');

// This function updates the CSS variable value when an input element is changed or moved
function handleUpdate() {
    // Get the suffix from the data-sizing attribute or set it to an empty string
    const suffix = this.dataset.sizing || '';
    // Set the value of the corresponding CSS variable to the input value plus the suffix
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Add event listeners to all input elements to trigger handleUpdate function when input is changed or moved
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

