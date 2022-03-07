const DESCRIPTIONS = ['Берег моря.Шезлонги.Парк.', 'Креативный знак, указывающий по направлению к пляжу.', 'Берег океана', 'Роскошная девушка в купальнике с фотоаппаратом в руках.', 'Обед на двоих', 'Черный автомобиль'];

const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const USER_NAMES = ['Денис', 'Максим', 'Юлия', 'Андрей', 'Мария', 'Елена', 'Алексей', 'Маргарита', 'Олег', 'Игорь'];

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const SIMILAR_COMMENT_COUNT = 5;
const SIMILAR_PHOTOS_COUNT = 25;

//Источник MDN https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0) {
    throw new Error('Минимальное значение должно быть положительным числом');
  } else if (max <= min) {
    throw new Error('Максимальное значение должно быть больше минимального');
  }
  return (Math.floor(Math.random() * (max - min + 1)) + min);
};

getRandomIntInclusive(0, 6);


//Взято за образец: http://kodesource.top/javascript/form/string-length.php
const checkLength = function (inputText, maxLength) {
  return inputText.length <= maxLength;
};

checkLength('Привет! Как дела?', 140);

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const createComment = (id) => ({
  id: id+1,
  avatar: `img/avatar-${  getRandomIntInclusive(1, 6)  }.svg`,
  message: getRandomArrayElement(MESSAGES),
  userName: getRandomArrayElement(USER_NAMES)
});

const createDescriptionPhoto = (id) => ({
  id: id+1,
  url: `photos/${String(id+1).padStart(2, '0')}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomIntInclusive(MIN_LIKES, MAX_LIKES),
  comments: Array.from({length: SIMILAR_COMMENT_COUNT}, (_, i) => createComment(i))
});

const descriptionPhotos = Array.from({length: SIMILAR_PHOTOS_COUNT}, (_, i) => createDescriptionPhoto(i));
window.console.log(descriptionPhotos);
