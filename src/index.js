const trail = document.getElementById("trail");
const menu = document.getElementById("menu");

function animatetrailer(e, interacting) {
  const x = e.clientX - trail.offsetWidth / 2;
  const y = e.clientY - trail.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 0.6 : 1})`,
  };

  trail.animate(keyframes, {
    duration: 800,
    fill: "forwards",
  });
}

window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable"),
    interacting = interactable !== null;

  animatetrailer(e, interacting);
};

Array.from(document.getElementsByClassName("menu-item")).forEach(
  (item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    };
  }
);
