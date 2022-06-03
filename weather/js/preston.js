const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */

var d = new Date();
var day = d.getDay();

const announcment = document.getElementById('announcment');
console.log(announcment);

if (day == 5) {
  announcment.style.display = 'grid';
} else {
  announcment.style.display = 'none';
}

let width = screen.width;

const size = document.getElementById('size').innerHTML;

if (width < 520) {
  size = document.getElementById('size').innerHTML = 'Small';
} 

if (width < 960) {
  size = document.getElementById('size').innerHTML = 'Medium';
} 

else {
  size = document.getElementById('size').innerHTML = 'Large';
}