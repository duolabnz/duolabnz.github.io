window.addEventListener('mouseup', function (e) {
  let menu = document.querySelector('.menu');
  let hamburger = document.querySelector('.hamburger');

  if (menu.classList.contains('active') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
    toggle_menu();
  }
});

function toggle_menu() {
  let hamburger = document.querySelector('.hamburger');
  let menu = document.querySelector('.menu');

  hamburger?.classList.toggle('active');
  menu?.classList.toggle('active');
}

function start_video(container) {
  if (!container) {
    return;
  }

  let video = container.querySelector('video');
  if (!video) {
    return;
  }

  video.play();
}

function stop_video(container) {
  if (!container) {
    return;
  }

  let video = container.querySelector('video');
  if (!video) {
    return;
  }

  video.pause();
  video.currentTime = 0;
}
