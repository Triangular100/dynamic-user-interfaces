let interval;

function deActivate(ele) {
  ele.classList.remove('active');
}

function activate(ele) {
  ele.classList.add('active');
}

function activateDot(index) {
  const allDots = document.querySelectorAll('.dot');
  for (let i = 0; i < allDots.length; i += 1) {
    if (i === index) {
      activate(allDots[i]);
    } else {
      deActivate(allDots[i]);
    }
  }
}

function activateImg(index) {
  // Select images
  const allImages = document.querySelectorAll('#images img');
  // Deactivate all except the img with given index
  for (let i = 0; i < allImages.length; i += 1) {
    if (i === index) {
      activate(allImages[i]);
    } else {
      deActivate(allImages[i]);
    }
  }
}

function nextImage() {
  const currentImg = document.querySelector('#images img.active');
  const nextImg =
    currentImg.nextElementSibling ||
    document.querySelector('#images img:first-child');

  activate(nextImg);
  deActivate(currentImg);
}

function nextDot() {
  const currentDot = document.querySelector('#dots .active');
  const followingDot =
    currentDot.nextElementSibling || document.querySelector('.dot:first-child');

  activate(followingDot);
  deActivate(currentDot);
}

function prevImage() {
  const currentImg = document.querySelector('#images img.active');
  const prevImg =
    currentImg.previousElementSibling ||
    document.querySelector('#images img:last-child');

  activate(prevImg);
  deActivate(currentImg);
}

function prevDot() {
  const currentDot = document.querySelector('#dots .active');
  const precedingDot =
    currentDot.previousElementSibling ||
    document.querySelector('.dot:last-child');

  activate(precedingDot);
  deActivate(currentDot);
}

function next() {
  nextImage();
  nextDot();
}

function prev() {
  prevImage();
  prevDot();
}

function stopCarousel() {
  clearInterval(interval);
}

function startCarousel() {
  interval = setInterval(() => next(), 5000);
}

function activateCarouselIndex(index) {
  activateDot(index);
  activateImg(index);
}

function bindDotEvent(dot) {
  dot.addEventListener('click', () => {
    stopCarousel();

    const index = Number(dot.id);
    activateCarouselIndex(index);

    startCarousel();
  });
}

function bindNextEvent() {
  stopCarousel();
  next();
  startCarousel();
}

function bindPrevEvent() {
  stopCarousel();
  prev();
  startCarousel();
}

function bindEvents() {
  document.querySelectorAll('.dot').forEach((dot) => bindDotEvent(dot));
  document
    .querySelector('#next')
    .addEventListener('click', () => bindNextEvent());
  document
    .querySelector('#prev')
    .addEventListener('click', () => bindPrevEvent());
}

function imageCarousel() {
  startCarousel();
  bindEvents();
}

export default imageCarousel;
