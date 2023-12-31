document.addEventListener('keydown', handleKeyboardUse);
document.addEventListener('mousemove', handleMouseUse);

function handleKeyboardUse() {
  document.documentElement.setAttribute('data-input', 'keyboard');
}

function handleMouseUse() {
  document.documentElement.setAttribute('data-input', 'mouse');
}

document.addEventListener('scroll', () => {
  handleScroll();
});

document.addEventListener('resize', () => {
  handleScroll();
});

function handleScroll() {
  let scrollPercent = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  document.documentElement.setAttribute('data-scroll', Math.round(scrollPercent * 10))
  if (scrollPercent > .9)
    document.documentElement.classList.add('scrolled');
  else
    document.documentElement.classList.remove('scrolled');
}