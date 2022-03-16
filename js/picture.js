//import { createDescriptionPhotos } from './data.js';

//const similarPhotos = createDescriptionPhotos(25);
const template = document.querySelector('#picture').content;
const itemTemplate = template.querySelector('.picture');

const photoSection = document.querySelector('.pictures');

const fragment = document.createDocumentFragment();

const createSimilarPhotos = ((photos) => {
  photos.forEach((photo) => {
    const element = itemTemplate.cloneNode(true);
    element.querySelector('.picture__img').src = photo.url;
    element.querySelector('.picture__likes').textContent = photo.likes;
    element.querySelector('.picture__comments').textContent = photo.comments.length;
    fragment.appendChild(element);
  });
  photoSection.appendChild(fragment);
});

export {createSimilarPhotos};
