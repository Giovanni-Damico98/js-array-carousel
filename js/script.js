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
const thumbGallery = document.getElementById("thumbnails");

// for (let i = 0; i < sources.length; i++) {
//   const src = sources[i];
//   const image = document.createElement("img");
//   image.src = src;
//   image.alt = `heroes-${i + 1}`;
//   carouselGallery.appendChild(image);
//   thumbGallery.appendChild(image);
// }

// Genero le immagini da JS
let imgs = "";
for (let i = 0; i < sources.length; i++) {
  const currentElement = sources[i];
  imgs += `<img "alt=heroes-${i + 1}" src="${currentElement}">`;
}
// Metto in pagina tutte le immagini
carouselGallery.innerHTML = imgs;
thumbGallery.innerHTML = imgs;
// Raccolgo tutte le immagini
const images = document.querySelectorAll("#carousel img");
const thumbs = document.querySelectorAll("#thumbnails img");

// Rendo visibile la prima img
let currentActiveIndex = 0;
// Aggiungo la classe active all'immagine corrispondente (i)
images[currentActiveIndex].classList.add("active");
thumbs[currentActiveIndex].classList.add("active");

// Eventi dinamici
// Next button
nextButton.addEventListener("click", function () {
  // Tolgo la classe active all'immagine attualmente attiva
  images[currentActiveIndex].classList.remove("active");
  thumbs[currentActiveIndex].classList.remove("active");
  // Incremento l'indice
  currentActiveIndex++;
  if (currentActiveIndex === images.length) {
    currentActiveIndex = 0;
  }
  // Aggiungo la classe active all'immagine corrispondente (i)
  images[currentActiveIndex].classList.add("active");
  thumbs[currentActiveIndex].classList.add("active");
});

// Prev button
prevButton.addEventListener("click", function () {
  // Tolgo la classe active all'immagine attualmente attiva
  images[currentActiveIndex].classList.remove("active");
  thumbs[currentActiveIndex].classList.remove("active");
  // Decremento l'indice
  currentActiveIndex--;
  if (currentActiveIndex < 0) {
    currentActiveIndex = images.length - 1;
  }
  // Aggiungo la classe active all'immagine corrispondente (i)
  images[currentActiveIndex].classList.add("active");
  thumbs[currentActiveIndex].classList.add("active");
});

// Per ogni Thumbnail
for (let i = 0; i < thumbs.length; i++) {
  // Prendo il singolo thumbnail di volta in volta
  const thumbnail = thumbs[i];

  thumbnail.addEventListener("click", function () {
    // Tolgo la classe active all'immagine attualmente attiva
    images[currentActiveIndex].classList.remove("active");
    thumbs[currentActiveIndex].classList.remove("active");
    // Imposto l'indice al valore di questo thumb
    currentActiveIndex = i;
    // Aggiungo la classe active all'immagine corrispondente (i)
    images[currentActiveIndex].classList.add("active");
    thumbs[currentActiveIndex].classList.add("active");
  });
}
