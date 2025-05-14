// script.js

// 1. Event Handling 🎈
const clickButton = document.getElementById('clickButton');
const hoverArea = document.getElementById('hoverArea');
const keypressInput = document.getElementById('keypressInput');
const keypressOutput = document.getElementById('keypressOutput');
const doubleClickButton = document.getElementById('doubleClickButton');
const longPressArea = document.getElementById('longPressArea');
const longPressMessage = document.getElementById('longPressMessage');

// Button click
clickButton.addEventListener('click', () => {
    alert('Button Clicked! 🎉');
});

// Hover effects
hoverArea.addEventListener('mouseover', () => {
    hoverArea.textContent = 'You are hovering!';
});

hoverArea.addEventListener('mouseout', () => {
    hoverArea.textContent = 'Hover Over Me';
});

// Keypress detection
keypressInput.addEventListener('keypress', (event) => {
    keypressOutput.textContent = `You pressed: ${event.key}`;
});

// Bonus: Double-click action
doubleClickButton.addEventListener('dblclick', () => {
    alert('Double Click Secret Activated! 🤫✨');
});

// Bonus: Long press action (using setTimeout)
let longPressTimer;
longPressArea.addEventListener('mousedown', () => {
    longPressTimer = setTimeout(() => {
        longPressMessage.textContent = 'Long Press Detected! ⏳';
    }, 1500); // Adjust the time (in milliseconds) for the long press
});

longPressArea.addEventListener('mouseup', () => {
    clearTimeout(longPressTimer);
    if (longPressMessage.textContent === 'Long Press Detected! ⏳') {
        // Do something else if it was a long press and not just a quick release
    } else {
        longPressMessage.textContent = ''; // Clear message if not a long press
    }
});

longPressArea.addEventListener('mouseout', () => {
    clearTimeout(longPressTimer);
    longPressMessage.textContent = ''; // Clear message if mouse leaves during press
});

// 2. Interactive Elements 🎮
const changeColorButton = document.getElementById('changeColorButton');
const colorChangerDiv = document.getElementById('colorChanger');
const colors = ['#ff6f61', '#6a5acd', '#4bc0c8', '#fddb3a', '#98c1d9'];
let colorIndex = 0;

changeColorButton.addEventListener('click', () => {
    colorChangerDiv.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});

// Image gallery / slideshow
const galleryImages = document.querySelectorAll('#gallery img');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentIndex = 0;

function showImage(index) {
    galleryImages.forEach(img => img.classList.remove('active'));
    galleryImages[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage(currentIndex);
});

// Tabs or accordion-style content
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const targetId = header.getAttribute('data-target');
        const content = document.getElementById(targetId);
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// 3. Form Validation 📋✅
const validationForm = document.getElementById('validationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formFeedback = document.getElementById('formFeedback');

validationForm.addEventListener('submit', (event) => {
    let isValid = true;

    // Required field checks
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Invalid email format.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Password rules
    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
        formFeedback.textContent = 'Please fix the errors above.';
        formFeedback.style.color = 'red';
    } else {
        formFeedback.textContent = 'Form submitted successfully!';
        formFeedback.style.color = 'green';
        // In a real scenario, you would submit the form data here
    }
});

// Helper function for email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Bonus: Real-time feedback while typing (for password)
passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8 && passwordInput.value.length > 0) {
        passwordError.textContent = 'Password is too short.';
    } else if (passwordInput.value.length >= 8) {
        passwordError.textContent = '';
    } else {
        passwordError.textContent = ''; // Clear if the field is empty
    }
});