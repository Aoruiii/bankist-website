'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const scrollToSection = function (e) {
  // const s1Coords = section1.getBoundingClientRect();
  // console.log(s1Coords);
  // // window.pageXOffset, pageYOffset, document.documentElement.clientHeight, document.documentElement.clientWidth

  // window.scrollTo(s1Coords.left, s1Coords.top + window.scrollY);

  section1.scrollIntoView({
    behavior: 'smooth',
  });
};

btnScrollTo.addEventListener('click', scrollToSection);

const h1 = document.querySelector('h1');

// const h1MouseEnter = function () {
//   alert('mouse enter!');

//   h1.removeEventListener('mouseenter', h1MouseEnter);
// };

// h1.addEventListener('mouseenter', h1MouseEnter);

// Event Propagation

// generate random background color
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('container', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('nav', e.target, e.currentTarget);
//   },
//   true
// );

/////////////////////////
// Page navigation

// // creating dom object

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'We use cookie to improve functionnality. <button class="btn btn--close-cookie">Got it</button>';

// // insert

// const header = document.querySelector('.header');

// header.append(message);
// message.style.width = '150%';
// message.style.backgroundColor = 'black';

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });
