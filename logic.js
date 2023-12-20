const myObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.07,
  }
);

const elements = document.querySelectorAll(".hidden");

elements.forEach((element) => {
  myObserver.observe(element);
});

const myObserverFooter = new IntersectionObserver((entry) => {
  if (entry[0].isIntersecting) {
    entry[0].target.classList.add("show-footer");
  } else {
    entry[0].target.classList.remove("show-footer");
  }
});

const footer = document.querySelector(".hidden-footer");

myObserverFooter.observe(footer);

function navDesktopShow() {
  document.getElementById("nav-desktop").classList.add("show-nav");
}

window.addEventListener("load", navDesktopShow);

function verificarTamanhoPagina() {
  const cardMobileRemoveHidden = document.querySelectorAll(".card");
  cardMobileRemoveHidden.forEach((e) => {
    if (window.innerWidth < 899) {
      e.classList.remove("hidden");
    } else {
      e.classList.add("hidden");
    }
  });
}

window.addEventListener("load", verificarTamanhoPagina);
window.addEventListener("resize", verificarTamanhoPagina);

const emailButton = document.getElementById("email-button");

emailButton.addEventListener("click", () => {
  const email = document.getElementById("email-text").value;

  if (!navigator.clipboard) {
    alert("A funcionalidade de cópia não é suportada neste navegador.");
    return;
  }

  navigator.clipboard.writeText(email);
});

particlesJS("particles-container", {
  particles: {
    number: { value: 150, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "triangle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 100, line_linked: { opacity: 1 } },
      bubble: { distance: 100, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
let count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

function openNavbar() {
  const navbar = document.getElementById("nav-mobile-inner");
  const navbarIcon = document.getElementById("nav-mobile-icon");

  navbarIcon.icon = navbarIcon.icon === "ion:menu" ? "ion:close" : "ion:menu";

  navbar.classList.toggle("open");

  document.addEventListener("click", (event) => {
    const targetElement = event.target;

    if (!navbar.contains(targetElement) && targetElement !== navbarIcon) {
      navbar.classList.remove("open");
      navbarIcon.icon = "ion:menu";
    }
  });
}
