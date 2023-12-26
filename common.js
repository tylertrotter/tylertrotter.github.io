document.addEventListener('keydown', handleKeyboardUse);
document.addEventListener('mousemove', handleMouseUse);

function handleKeyboardUse() {
  document.documentElement.setAttribute('data-input', 'keyboard');
}

function handleMouseUse() {
  document.documentElement.setAttribute('data-input', 'mouse');
}

document.addEventListener('scroll', () => {
  let scrollPercent = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  if (scrollPercent > .75)
    document.documentElement.classList.add('scrolled');
  else
    document.documentElement.classList.remove('scrolled');
});