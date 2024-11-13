// Get the button and skills section elements
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.querySelector('skills') as HTMLElement;

// Initialize skills section visibility
skillsSection.style.display = 'block';

// Add click event to toggle visibility
toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.innerText = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        toggleButton.innerText = 'Show Skills';
    }
});