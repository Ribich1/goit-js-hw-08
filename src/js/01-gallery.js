// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryUl = document.querySelector(".gallery");


const markupItem = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item"><a class="gallery__link" href=${original}> <img 
   class="gallery__image" src=${preview} alt="${ description }" /> </a></li>`
).join('');

galleryUl.insertAdjacentHTML('afterbegin', markupItem);

 let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
    });


