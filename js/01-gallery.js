import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) =>
  `<div class = "gallery_item">
    <a class='gallery__link' href = "${original}">
        <img 
            class = "gallery__image"
            src = "${preview}"
            data-source= "${original}"
            alt = "${description}"
        />
    </a>
   </div>`;
const galleryMarkup = galleryItems.map(createGalleryItem).join("");

// console.log(galleryMarkup);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

// console.log(galleryMarkup);

galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  const clickTarget = event.target;

  if (clickTarget.nodeName !== "IMG") {
    return;
  }

  const largeImageUrl = clickTarget.dataset.source;
  const modal = basicLightbox.create(
    `<img src = "${largeImageUrl}" width ="800" height ="600"> `
  );
  modal.show();
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") modal.close();
  });
});

// let isOpenModal = false;

// function openModal() {
//   isOpenModal = true;
//   basicLightbox
//     .create(`<img src = "${largeImageUrl}" width ="800" height ="600"> `)
//     .show();
// }

// function closeModal() {
//   isOpenModal = false;
//   basicLightbox.close();
// }

// document.querySelector(".gallery").addEventListener("click", (event) => {
//   if (event.target.nodeName === "IMG") {
//     openModal();
//   }
// });

// document.addEventListener("keydown", (event) => {
//   if (event.key === "Escape" && isOpenModal) {
//     closeModal();
//   }
// });
