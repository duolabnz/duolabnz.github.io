// hamburger toggle
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
hamburger.addEventListener('click', function () {
  console.debug("hamburger toggled");
  
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});
