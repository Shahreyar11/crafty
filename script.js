// =========================
// OPEN SINGLE PRODUCT PAGE
// =========================

function openProduct(name, image, price){
  // Encode URI to avoid spaces/newlines breaking the URL
  const query = `name=${encodeURIComponent(name)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}`;
  window.location.href = `pages/product.html?${query}`;
}

// =========================
// VIEW ALL PRODUCTS PAGE
// =========================

function viewAll(category){
  // SAVE CATEGORY
  localStorage.setItem("selectedCategory", category);

  // OPEN ALL PRODUCTS PAGE
  window.location.href = "pages/allproducts.html";
}

// =========================
// SLIDER ANIMATION
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.getElementById("slider");
  const track = document.getElementById("track");

  if (!sliderContainer || !track) return;

  // We are using purely CSS animation for the infinite scrolling track.
  // Hover effects to pause the animation are handled via CSS (.slider-container:hover .slide-track).
  // The items inside the slider are wrapped in <a> tags, making them clickable automatically.
});