// on click or touch outside of menu (when menu is open) close the menu
function on_interact(e) {
  let menu = document.getElementById('menu');
  let menu_button = document.getElementById('menu-button');

  if (menu?.classList.contains('flex') && !menu.contains(e.target) && !menu_button?.contains(e.target)) {
    toggle_menu();
  }
}
window.addEventListener('mouseup', on_interact);
window.addEventListener('touchstart', on_interact);

// // change opacity of items relative to scroll
// function lerp(a1, a2, b1, b2, a) {
//   if (a1 == a2) {
//     return (b1 + b2) / 2;
//   }

//   return (b1 + (a - a1) * (b2 - b1) / (a2 - a1));
// }

// function isScrolledToBottom() {
//   return window.innerHeight + window.scrollY >= document.body.offsetHeight;
// }

// function update_opacity() {
//   // let elements = document.querySelectorAll(".text-dynamic-opacity");
//   let elements = document.querySelectorAll("*");
//   let screenHeight = window.innerHeight;

//   let at_bottom = isScrolledToBottom();

//   elements.forEach(element => {
//     if (at_bottom) {
//       element.style.opacity = 1;
//       return;
//     }

//     let rect = element.getBoundingClientRect();
//     let relativePosition = Math.min(1, Math.max(0, rect.top / screenHeight)); // Position relative to viewport

//     // Calculate opacity (50% at 1, 100% at 0.7)
//     let opacity = lerp(1.0, 0.7, 0.5, 1.0, relativePosition);

//     element.style.opacity = opacity;
//   });
// }

// let should_debounce = false;
// function on_scroll(_) {
//   if (!should_debounce) {
//     should_debounce = true;

//     window.requestAnimationFrame(() => {
//       update_opacity();
//       should_debounce = false;
//     });
//   }
// }

// // Attach function to scroll event
// // window.addEventListener('scroll', on_scroll);
// // Run on load to set initial opacity
// // window.addEventListener('load', on_scroll);

function toggle_active(element) {
  if (!element || element.nodeType !== 1) {
    return;
  }

  element.classList.toggle('active');
  element.childNodes.forEach(toggle_active);
}

function toggle_menu() {
  let menu = document.getElementById('menu');

  menu?.classList.toggle('hidden');
  menu?.classList.toggle('flex');

  let menu_button = document.getElementById('menu-button');
  menu_button?.classList.toggle('open');
}

function play_video(container) {
  if (!container) {
    return;
  }

  let video = container.querySelector('video');
  if (!video) {
    return;
  }

  video.play();

  hide_indicator(container);
}

function pause_video(container) {
  if (!container) {
    return;
  }

  let video = container.querySelector('video');
  if (!video) {
    return;
  }

  video.pause();
}

function toggle_video(container) {
  if (!container) {
    return;
  }

  let video = container.querySelector('video');
  if (!video) {
    return;
  }

  if (video.paused) {
    video.play();
    hide_indicator(container);
  } else {
    video.pause();
  }
}

function hide_indicator(container) {
  let indicator = container.querySelector('.indicator');
  if (!indicator) {
    return;
  }

  indicator.classList.add('hidden');
}

function toggle_accordian(element) {
  element.classList.toggle('open');

  let accordians = document.querySelectorAll('.accordian');
  accordians.forEach((accordian) => {
    if (accordian !== element) {
      accordian.classList.remove('open');
    }
  });
}
