import { isEscapeKey } from './util.js';
import { createDescriptionPhotos } from './data.js';
import { createSimilarPhotos } from './picture.js';
import { createBigPictures, fullPictures } from './big-picture.js';

const photos =  createDescriptionPhotos();
createSimilarPhotos(photos);

// обработчики открытия и закрытия попап
const elementBody = document.querySelector('body');
const previews = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const buttonClose = bigPicture.querySelector('.big-picture__cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

function openPopup () {
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

const addPictureClickHandler = function (preview, picture) {
  preview.addEventListener('click', () => {
    createBigPictures(picture);
    openPopup();
  });
};

for (let i = 0; i < previews.length; i++) {
  addPictureClickHandler(previews[i], fullPictures[i]);
}
