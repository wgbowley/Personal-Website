
// Pointing ARROW 
document.addEventListener('DOMContentLoaded', () => {
  const arrow = document.getElementById('scrollArrow');

  function toggleArrow() {
    if (window.scrollY > 10) {
      arrow.classList.add('hidden');
    } else {
      arrow.classList.remove('hidden');
    }
  }

  // Disable transition, toggle instantly
  arrow.classList.add('no-transition');
  toggleArrow();

  // Re-enable transition after a tick so later toggles fade smoothly
  requestAnimationFrame(() => {
    arrow.classList.remove('no-transition');
  });

  window.addEventListener('scroll', toggleArrow);
});

// Flow user over project boxes:
const boxes = document.querySelectorAll('.project-box');

boxes.forEach(box => {
  let currentX = 50;
  let currentY = 50;
  let targetX = 50;
  let targetY = 50;

  const ease = 0.15; // easing factor (0 < ease < 1)

  function animate() {
    // interpolate current position toward target position
    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;

    box.style.setProperty('--x', `${currentX}%`);
    box.style.setProperty('--y', `${currentY}%`);

    requestAnimationFrame(animate);
  }

  animate(); // start animation loop

  box.addEventListener('mousemove', e => {
    const rect = box.getBoundingClientRect();
    targetX = ((e.clientX - rect.left) / rect.width) * 100;
    targetY = ((e.clientY - rect.top) / rect.height) * 100;
  });

  box.addEventListener('mouseleave', () => {
    targetX = 50;
    targetY = 50;
  });
});

