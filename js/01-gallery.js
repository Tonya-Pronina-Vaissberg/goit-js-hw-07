import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup = galleryItems.map(({preview, original, description}) => {
return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
}).join('');

galleryEl.insertAdjacentHTML('afterbegin', galleryItemsMarkup);


const instance = basicLightbox.create(`<img src="">` , {
    onShow: instance => {
        window.addEventListener('keydown', onEscClose)
    },
    onClose:  instance => {
        window.removeEventListener("keydown", onEscClose);
      },
});

const openModal = evt => {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG' ) {
        return
    } 
    
   instance.element().querySelector('IMG').src=evt.target.dataset.source;

   instance.show();

};


const onEscClose = evt => {
    if (evt.code === "Escape") {
        instance.close();
        return;
      }
};


galleryEl.addEventListener('click', openModal);

