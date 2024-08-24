// Fase di preparazione
const sources = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
];
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const carouselGallery = document.querySelector(".gallery");
for (let i = 0; i < sources.length; i++) {
  const src = sources[i];
  const image = document.createElement("img");
  image.src = src;
  image.alt = `landscape-${i + 1}`;
  carouselGallery.appendChild(image);
}
const images = document.querySelectorAll("#carousel img");

// Rendo visibile la prima img
let currentActiveIndex = 0;
images[currentActiveIndex].classList.add("active");

// Eventi dinamici
// Next button
nextButton.addEventListener("click", function () {
  images[currentActiveIndex].classList.remove("active");
  currentActiveIndex++;
  if (currentActiveIndex === images.length) {
    currentActiveIndex = 0;
  }
  images[currentActiveIndex].classList.add("active");
});

// Prev button
prevButton.addEventListener("click", function () {
  images[currentActiveIndex].classList.remove("active");
  currentActiveIndex--;
  if (currentActiveIndex < 0) {
    currentActiveIndex = images.length - 1;
  }
  images[currentActiveIndex].classList.add("active");
});
