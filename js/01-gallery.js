import { galleryItems } from './gallery-items.js';

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const gallery = document.querySelector('.gallery');

const markupGallery = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
).join('');

gallery.insertAdjacentHTML('beforeend', markupGallery);

// Додавання функціоналу

gallery.addEventListener('click', handlerModal);

function handlerModal(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

    const modal = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
    `, {
        handler: null,
        onShow: (elem) => {
            this.handler = handlerClose.bind(elem);
            document.addEventListener('keydown', this.handler);
        },
        onclose: () => document.removeEventListener('keydown', this.handler)
    });

    modal.show();
}

function handlerClose(evt) {
    if (evt.code === 'Escape'){
        this.close();
    }
};
