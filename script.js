const gallery = document.getElementById("gallery");

// LOAD 43 IMAGES
if (gallery) {
  for (let i = 1; i <= 43; i++) {
    const img = document.createElement("img");
    img.src = `assets/images/photo${i}.jpg`;
    img.classList.add("gallery-img");
    gallery.appendChild(img);
  }
}

// MODAL
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-img")) {
    modal.style.display = "flex";
    modalImg.src = e.target.src;
  }
});

if (closeBtn) {
  closeBtn.onclick = () => modal.style.display = "none";
}

if (modal) {
  modal.onclick = () => modal.style.display = "none";
}

<div class="gallery" id="gallery"></div>