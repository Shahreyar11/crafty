// =========================
// OPEN SINGLE PRODUCT PAGE
// =========================

function openProduct(name, image, price){

  window.location.href =
  `pages/product.html?name=${encodeURIComponent(name)}
  &image=${encodeURIComponent(image)}
  &price=${encodeURIComponent(price)}`;

}

// =========================
// VIEW ALL PRODUCTS PAGE
// =========================

function viewAll(category){

  // SAVE CATEGORY
  localStorage.setItem(
    "selectedCategory",
    category
  );

  // OPEN ALL PRODUCTS PAGE
  window.location.href =
  "pages/allproducts.html";

}

// =========================
// SLIDER
// =========================

document.addEventListener("DOMContentLoaded", () => {

  const slider =
  document.getElementById("slider");

  const track =
  document.getElementById("track");

  // SAFETY CHECK
  if (!slider || !track) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  // MOUSE DOWN
  slider.addEventListener("mousedown", (e) => {

    isDown = true;

    slider.style.cursor = "grabbing";

    startX = e.pageX;

    scrollLeft = track.offsetLeft;

    track.style.animation = "none";

  });

  // MOUSE LEAVE
  slider.addEventListener("mouseleave", () => {

    isDown = false;

    slider.style.cursor = "grab";

    track.style.animation =
    "scroll 20s linear infinite";

  });

  // MOUSE UP
  slider.addEventListener("mouseup", () => {

    isDown = false;

    slider.style.cursor = "grab";

    track.style.animation =
    "scroll 20s linear infinite";

  });

  // MOUSE MOVE
  slider.addEventListener("mousemove", (e) => {

    if (!isDown) return;

    e.preventDefault();

    const walk =
    (e.pageX - startX) * 1.5;

    track.style.transform =
    `translateX(${scrollLeft + walk}px)`;

  });

});