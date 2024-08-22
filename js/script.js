// Fase di preparazione
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const images = document.querySelectorAll("#carousel img");

// Rendo visibile la prima img
let currentActiveIndex = 0;
images[currentActiveIndex].classList.add("active");

// Eventi dinamici
// Next button
nextButton.addEventListener("click", function () {});

// Prev button
prevButton.addEventListener("click", function () {});
