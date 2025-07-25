// Scroll animation on load (optional enhancements here)
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".card, .timeline li");
  elements.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, i * 200);
  });
});
