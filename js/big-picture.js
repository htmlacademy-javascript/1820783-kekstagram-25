import { isEscapeKey } from './util.js';
import { createDescriptionPhotos } from './data.js';

const fullPictures = createDescriptionPhotos();

const elementBody = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const commentElements = bigPicture.querySelector('.social__comments');
const commentElement = commentElements.querySelector('.social__comment');
const buttonClose = bigPicture.querySelector('.big-picture__cancel');

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
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  photo.comments.forEach((item) => {
    fragment.appendChild(setCommentData(item));
  });
  commentElements.appendChild(fragment);
};

// обработчики открытия и закрытия попап

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

function openPopup () {
  createBigPictures(fullPictures[2]); //к сожалению картинку выбрать можно только вручную

  elementBody.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  bigPicture.querySelector('.social__comment-count').classList.add('visually-hidden');
  bigPicture.querySelector('.social__comments-loader').classList.add('visually-hidden');

  document.addEventListener('keydown', onPopupEscKeydown);
}

// Закрывает попап с полноэкранным изображением (+)
function closePopup () {
  elementBody.classList.remove('modal-open');
  bigPicture.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscKeydown);
}

buttonClose.addEventListener('click', () => {
  closePopup ();
});

const preview = function () {
  const previews = document.querySelector('.pictures');

  previews.addEventListener('click', (evt) => {
    const target = evt.target;

    if (target.classList.contains('picture__img')) {
      openPopup();
    }
  });
};

preview();

//export {createBigPictures};
