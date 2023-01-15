const images = document.querySelectorAll('.content__images img');

images.forEach(img => {
  img.setAttribute('tabIndex', 0);              
  img.addEventListener('click', e => enlargeImage(e));
  img.addEventListener('keyup', e => { 
    if (e.key === 'Enter') 
      enlargeImage(e)   ;
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' || e.key === 'Tab')
    closeLightbox();
})

function enlargeImage(e) {
  const lightbox = document.createElement('div');
  const exButton = document.createElement('button');
  const ex = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  const path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  exButton.classList.add('lightbox__ex');
  path.setAttribute('d', 'm2.784 2.761 14.85 14.849M17.669 2.707 2.82 17.556');
  ex.appendChild(path);
  exButton.appendChild(ex);
  lightbox.addEventListener('click', closeLightbox);
  lightbox.classList.add('lightbox');
  lightbox.appendChild(exButton);
  lightbox.appendChild(e.target.cloneNode());
  document.body.appendChild(lightbox);
  exButton.focus();
}

function closeLightbox() {
  const lightbox = document.querySelector('.lightbox');
  const activeImage = lightbox.querySelector('img').getAttribute('src');
  lightbox.classList.add('is-closing');
  setTimeout(() => {
    lightbox.remove();
    document.querySelector(`[src="${activeImage}"]`).focus();
  }, 200);
}

const IO = new IntersectionObserver(IOCallback, {
  rootMargin: `0px 0px ${window.innerHeight * -.6}px 0px`,
  threshold: 1.0
})

const headings = document.querySelectorAll('h3[id],h4[id]');
headings.forEach(heading => {
  IO.observe(heading);
});

let activeHeading;
function IOCallback(entries, observer) {
  if (entries[0].isIntersecting) 
    activeHeading = entries[0].target.getAttribute('id');
  else if (window.scrollY < 100)
    activeHeading = null;

  if (document.querySelector('.content__nav .is-active'))
    document.querySelector('.content__nav .is-active').classList.remove('is-active');
  if (activeHeading)
    document.querySelector(`[href="#${activeHeading}"]`).parentElement.classList.add('is-active');
}