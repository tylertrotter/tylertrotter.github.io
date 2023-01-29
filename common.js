document.addEventListener('keydown', handleKeyboardUse);
document.addEventListener('mousemove', handleMouseUse);

function handleKeyboardUse() {
  document.documentElement.setAttribute('data-input', 'keyboard');
}

function handleMouseUse() {
  document.documentElement.setAttribute('data-input', 'mouse');
}

if (window.location.search) {
  const id = window.location.search.replace('?', '');
  document.querySelectorAll('a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.indexOf('https://') === -1 && href.indexOf('.pdf') === -1) {
      const qsChar = (href.indexOf('?')) > -1 ? '&' : '?';
      a.setAttribute('href', a.getAttribute('href') + qsChar + id);
    }
  })
}