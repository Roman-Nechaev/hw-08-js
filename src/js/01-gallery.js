// Add imports above this line
import { galleryItems } from './gallery-items';
import galleryCardsTpl from '../template/gallery-cards.hbs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryBoxRef = document.querySelector('.gallery');

const creatGalleryCards = galleryCardsTpl(galleryItems);

galleryBoxRef.innerHTML = creatGalleryCards;

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
