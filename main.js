/* Font size switcher */

// Select switcher buttons and page content
let smallerFont = document.querySelector('.smaller');
let normalFont = document.querySelector('.normal');
let biggerFont = document.querySelector('.bigger');
let words = document.querySelector('div');

// Get font-size property from CSS
function getFontSize() {
  return parseInt(window.getComputedStyle(words).getPropertyValue('font-size'));
}

// Event listeners for switcher buttons
smallerFont.addEventListener('click', () => {
  words.style.fontSize = (getFontSize() - 1).toString() + 'px';
});
normalFont.addEventListener('click', () => {
  words.style.fontSize = '1em';
});
biggerFont.addEventListener('click', () => {
  words.style.fontSize = (getFontSize() + 1).toString() + 'px';
});


/* Background color switcher */

// Select switcher buttons 
let body = document.querySelector('body')
let redBtn = document.querySelector('#red');
let greenBtn = document.querySelector('#green');
let blueBtn = document.querySelector('#blue');

// Event listeners for switcher buttons
redBtn.addEventListener('click', () => {
  body.classList.toggle('red');
});
greenBtn.addEventListener('click', () => {
  body.classList.toggle('green');
});
blueBtn.addEventListener('click', () => {
  body.classList.toggle('blue');
});