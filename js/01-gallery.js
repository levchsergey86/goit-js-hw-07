import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

let CreateMarkup = "";
galleryItems.forEach((item) => {
  CreateMarkup += `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>`;
});
gallery.insertAdjacentHTML("beforeend", CreateMarkup);

gallery.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const imageUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src=${imageUrl} width="800" height="600">
`);

  instance.show();

  const lightboxInstance = instance;

  document.addEventListener("keydown", CloseGallery);

  function CloseGallery(event) {
    if (event.code === "Escape") {
      lightboxInstance.close();
    }
  }
}
