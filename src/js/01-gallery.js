// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const createGalleryItem = item => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;
  link.setAttribute('data-lightbox', 'gallery');
  link.classList.add('lightbox');

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.classList.add('img-fluid');
  image.src = item.preview;
  image.dataset.source = item.original;
  image.alt = item.description;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
};

const renderGallery = items => {
  const galleryItems = items.map(item => createGalleryItem(item));
  galleryContainer.append(...galleryItems);

  const lightbox = new SimpleLightbox('.lightbox', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    close: true,
    closeText: '×',
    nav: true,
    scrollZoom: false,
    history: false,
    keyboard: true,
  });
  galleryContainer.addEventListener('click', event => {
    event.preventDefault();
    lightbox.open();
  });
};
console.log(galleryItems);
renderGallery(galleryItems);
