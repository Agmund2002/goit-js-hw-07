import { galleryItems } from './gallery-items.js';
// Change code below this line

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const gallery = document.querySelector('.gallery');

const markupGallery = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="s${preview}" alt="${description}" />
    </a>
 </li>`
).join('');

gallery.insertAdjacentHTML('beforeend', markupGallery);

// Додавання функціоналу

