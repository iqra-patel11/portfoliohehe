// 🌙 Theme Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  const body = document.body;
  if (body.classList.contains("dark-theme")) {
    body.classList.replace("dark-theme", "light-theme");
    toggle.textContent = "☀️";
  } else {
    body.classList.replace("light-theme", "dark-theme");
    toggle.textContent = "🌙";
  }
});

// ✨ GSAP Fade-In Animations
document.addEventListener("DOMContentLoaded", () => {
  gsap.from("header", { duration: 1, y: -50, opacity: 0 });
  gsap.from("nav a", {
    duration: 0.6,
    y: -20,
    opacity: 0,
    stagger: 0.1,
    delay: 0.3
  });
  gsap.from("section", {
    scrollTrigger: "section",
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.3
  });
});

// 🌀 Background Canvas Animation
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 153, 204, 0.6)";

  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(drawParticles);
}

drawParticles();

// 🪟 Resize Canvas
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
