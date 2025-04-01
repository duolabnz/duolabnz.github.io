function toggle_menu() {
  let hamburger = document.querySelector('.hamburger');
  let menu = document.querySelector('.menu');

  hamburger?.classList.toggle('active');
  menu?.classList.toggle('active');
}
