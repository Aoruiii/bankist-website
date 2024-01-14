const h1 = document.querySelector('h1');

//  going downwards: access children
// nodes
console.log(h1.childNodes);
// element
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.children);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);

// going upwards: access parents
// node
console.log(h1.parentNode);
// element
console.log(h1.parentElement);
console.log(h1.closest('.header')); //closest parent element

// going sideways: siblings

// nodes
console.log(h1.previousSibling);
console.log(h1.nextSibling);

// elements
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.parentElement.children);
