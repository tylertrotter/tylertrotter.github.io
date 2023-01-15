document.addEventListener('keydown', handleKeyboardUse);
document.addEventListener('mousemove', handleMouseUse);

function handleKeyboardUse() {
  document.documentElement.setAttribute('data-input', 'keyboard');
}

function handleMouseUse() {
  document.documentElement.setAttribute('data-input', 'mouse');
}