import { createDescriptionPhotos } from './data.js';

const fullPictures = createDescriptionPhotos();

const bigPicture = document.querySelector('.big-picture');
const commentElements = bigPicture.querySelector('.social__comments');
const commentElement = commentElements.querySelector('.social__comment');

const fragment = document.createDocumentFragment();

// Заполняем комментарии из массива
const setCommentData = function (comment) {
  const element = commentElement.cloneNode(true);
  element.querySelector('.social__picture').src = comment.avatar;
  element.querySelector('.social__picture').alt = comment.name;
  element.querySelector('.social__text').textContent = comment.message;
  return element;
};

// Создаем большие фото

const createBigPictures = function (photo) {
  bigPicture.querySelector('img').src = photo.url;
  bigPicture.querySelector('img').alt = photo.description;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  photo.comments.forEach((item) => {
    fragment.appendChild(setCommentData(item));
  });
  commentElements.appendChild(fragment);
};

export {createBigPictures, fullPictures};
