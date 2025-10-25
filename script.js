// --- Background Music ---
const bgMusic = document.getElementById("bgMusic");
const beginBtn = document.getElementById("beginBtn");
const replayBtn = document.getElementById("replayBtn");

beginBtn.addEventListener("click", () => {
  bgMusic.play();
  document.getElementById("wedding").scrollIntoView({ behavior: "smooth" });
});

replayBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  bgMusic.currentTime = 0;
  bgMusic.play();
});

// --- Floating Hearts Animation ---
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 24 + 16 + "px";
  heart.style.animation = `floatUp ${5 + Math.random() * 5}s ease-in infinite`;
  heart.style.opacity = 0.8;
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 600);

// --- Fade-in Scroll Effect ---
const faders = document.querySelectorAll('.fade');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

document.getElementById('gameBtn').addEventListener('click', () => {
  window.location.href = 'game.html';
});

faders.forEach(fader => observer.observe(fader));
