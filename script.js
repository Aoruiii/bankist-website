'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

///////////////////////////////////////

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

// ///////

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

/////////////////////////
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     const targetSection = document.querySelector(id);
//     targetSection.scrollIntoView({ behavior: 'smooth' });
//   });
// });

// event delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const contents = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //  guard clause
  if (!clicked) return;

  const clickedDataTab = clicked.getAttribute('data-tab');
  const clickedContent = document.querySelector(
    `.operations__content--${clickedDataTab}`
  );
  // console.log(clickedDataTab);
  // console.log(clickedContent);

  // remove the active tab
  tabs.forEach(ele => ele.classList.remove('operations__tab--active'));
  contents.forEach(ele => ele.classList.remove('operations__content--active'));

  // activate the clicked tab
  clicked.classList.add('operations__tab--active');
  clickedContent.classList.add('operations__content--active');
});

// Menu fade animation

const nav = document.querySelector('.nav');

const handleHover = function (e, opacity) {
  // return function (e) {
  if (e.target.classList.contains('nav__link')) {
    const hovered = e.target;
    const navLinks = nav.querySelectorAll('.nav__link');
    const navLogo = nav.querySelector('img');

    navLinks.forEach(ele => {
      if (ele != hovered) {
        ele.style.opacity = opacity;
      }
    });
    navLogo.style.opacity = opacity;
    // }
  }
};

nav.addEventListener('mouseover', e => handleHover(e, 0.5));

nav.addEventListener('mouseout', e => handleHover(e, 1));

//Sticky Navigation

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const obsCallback = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting === false) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(header);

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
