// Pequeñas estrellas que aparecen alrededor de la flor.
// No requiere ninguna librería externa.

document.addEventListener("DOMContentLoaded", () => {
  const field = document.querySelector(".sparkle-field");

  if (field) {
    for (let i = 0; i < 12; i++) {
      const star = document.createElement("span");

      star.textContent = Math.random() > 0.5 ? "✦" : "·";
      star.style.position = "absolute";
      star.style.left = `${8 + Math.random() * 84}%`;
      star.style.top = `${5 + Math.random() * 75}%`;
      star.style.color = Math.random() > 0.35
        ? "rgba(255,239,167,.9)"
        : "rgba(255,255,255,.9)";
      star.style.fontSize = `${5 + Math.random() * 9}px`;
      star.style.textShadow = "0 0 8px rgba(255,224,111,.9)";
      star.style.animation = `sparkle ${1.5 + Math.random() * 2.5}s ease-in-out infinite`;
      star.style.animationDelay = `${Math.random() * 2.5}s`;

      field.appendChild(star);
    }
  }
});
