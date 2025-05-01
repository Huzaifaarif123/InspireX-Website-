// script.js
const textElement = document.getElementById("changing-text");
const cursorElement = document.getElementById("cursor");
const words = ["Solutions.", "Services.", "Business.", "Institute."];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let speed = 800;

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    letterIndex--;
    if (letterIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  } else {
    letterIndex++;
    if (letterIndex > currentWord.length) {
      isDeleting = true;
      speed = 1000;
    }
  }

  textElement.textContent = currentWord.substring(0, letterIndex);

  setTimeout(type, speed);

  if (!isDeleting && letterIndex === currentWord.length) {
    speed = 1000; 
  } else if (isDeleting && letterIndex === 0) {
    speed = 800; 
  } else {
    speed = 100; 
  }
}

type();


document.getElementById('gradientButton').addEventListener('click', function() {
    this.style.background = 'linear-gradient(to left, purple, blue)';
  });
  