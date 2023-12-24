document.addEventListener('keydown', handleKeyboardUse);
document.addEventListener('mousemove', handleMouseUse);

function handleKeyboardUse() {
  document.documentElement.setAttribute('data-input', 'keyboard');
}

function handleMouseUse() {
  document.documentElement.setAttribute('data-input', 'mouse');
}

// document.addEventListener("scroll", e => {
//   document.documentElement.style.setProperty('--scroll-factor', document.documentElement.scrollTop / 5);
//   const works = document.querySelectorAll('.work');
//   for(let i = 0; i < works.length; i++) {
//     works[i].style.setProperty('--scroll-factor', Math.max(0, (document.documentElement.scrollTop / 5) - (works[i].offsetTop / 8)));
//   }
// });