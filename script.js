const mainImage = document.getElementById("mainImage");
const thumbs = Array.from(document.querySelectorAll(".thumb"));
const prevImageBtn = document.getElementById("prevImageBtn");
const nextImageBtn = document.getElementById("nextImageBtn");
const addToCartBtn = document.getElementById("addToCartBtn");
const statusText = document.getElementById("statusText");
const sizeSelect = document.getElementById("sizeSelect");

const images = thumbs.map((thumb) => thumb.dataset.image).filter(Boolean);
let currentIndex = Math.max(images.indexOf(mainImage.src.split("/").pop()), 0);

const setActiveImage = (imagePath) => {
  mainImage.src = imagePath;
  currentIndex = images.indexOf(imagePath);
  thumbs.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.image === imagePath);
  });
};

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const nextImage = thumb.dataset.image;

    if (!nextImage) {
      return;
    }

    setActiveImage(nextImage);
  });
});

if (prevImageBtn) {
  prevImageBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    setActiveImage(images[currentIndex]);
  });
}

if (nextImageBtn) {
  nextImageBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    setActiveImage(images[currentIndex]);
  });
}

if (addToCartBtn && statusText && sizeSelect) {
  addToCartBtn.addEventListener("click", () => {
    const size = sizeSelect.value;
    statusText.textContent = `Added to cart: Astra Artisan Piece (${size})`;
  });
}
