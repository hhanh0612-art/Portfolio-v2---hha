// Auto update year in footer
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// Simple fade-in animation on scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0px)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
  card.style.transition = "0.6s ease";
  observer.observe(card);
});
//tính năng nút view more
const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    card.classList.toggle("expanded");

    if (card.classList.contains("expanded")) {
      button.textContent = "View Less";
    } else {
      button.textContent = "View More";
    }
  });
});