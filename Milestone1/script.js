// Get the button and skills section elements
var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');

// Initialize skills section visibility
skillsSection.style.display = 'block';
// Add click event to toggle visibility
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.innerText = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        toggleButton.innerText = 'Show Skills';
    }
});
