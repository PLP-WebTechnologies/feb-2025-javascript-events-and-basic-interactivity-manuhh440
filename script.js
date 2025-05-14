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

// Bonus: Long press action
let longPressTimer;
longPressArea.addEventListener('mousedown', () => {
    longPressTimer = setTimeout(() => {
        longPressMessage.textContent = 'Long Press Detected! ⏳';
        longPressArea.classList.add('long-pressed'); // Visual feedback
        // You can trigger another action here if needed
    }, 1500); // Adjust the delay for long press
});

longPressArea.addEventListener('mouseup', () => {
    clearTimeout(longPressTimer);
    longPressArea.classList.remove('long-pressed');
    if (longPressMessage.textContent === 'Long Press Detected! ⏳') {
        longPressMessage.textContent = 'Secret Long Press Action! ✨';
    } else {
        longPressMessage.textContent = '';
    }
});

longPressArea.addEventListener('mouseout', () => {
    clearTimeout(longPressTimer);
    longPressArea.classList.remove('long-pressed');
    longPressMessage.textContent = '';
});

// 2. Interactive Elements 🎮
const changeButton = document.getElementById('changeButton');
const textOrColorChanger = document.getElementById('textOrColorChanger');
const buttonTexts = ["Transform!", "Change Again!", "One More Time!"];
let textIndex = 0;

changeButton.addEventListener('click', () => {
    if (Math.random() < 0.5) {
        // Change Text
        changeButton.textContent = buttonTexts[textIndex];
        textIndex = (textIndex + 1) % buttonTexts.length;
    } else {
        // Change Color
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        textOrColorChanger.style.backgroundColor = randomColor;
        changeButton.style.color = getContrastColor(randomColor);
    }
});

function getContrastColor(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance > 128 ? '#000000' : '#ffffff';
}

// Image gallery / slideshow
const galleryImages = document.querySelectorAll('#gallery img');
const prevImageButton = document.getElementById('prevImage');
const nextImageButton = document.getElementById('nextImage');
let currentImageIndex = 0;

function showGalleryImage(index) {
    galleryImages.forEach(img => img.classList.remove('active'));
    galleryImages[index].classList.add('active');
}

prevImageButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    showGalleryImage(currentImageIndex);
});

nextImageButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    showGalleryImage(currentImageIndex);
});

// Tabs or accordion-style content (using accordion for now)
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const targetId = header.getAttribute('data-target');
        const content = document.getElementById(targetId);
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Bonus: Add some animation using JS or CSS ✨
const galleryElement = document.getElementById('gallery');
galleryElement.classList.add('fade-in-out'); // Using CSS animation

// 3. Form Validation 📋✅
const validationForm = document.getElementById('validationForm');
const nameInput = document.getElementById('fullName');
const emailInput = document.getElementById('emailAddress');
const passwordInput = document.getElementById('userPassword');
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

    // Password rules (min 8 characters)
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
    } else {
        passwordError.textContent = '';
    }
});