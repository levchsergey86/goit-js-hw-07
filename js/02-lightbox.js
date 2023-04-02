import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

let createMarkup = "";
galleryItems.forEach((item) => {
  createMarkup += `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
          />
        </a>
      </li>`;
});
gallery.insertAdjacentHTML("beforeend", createMarkup);

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
