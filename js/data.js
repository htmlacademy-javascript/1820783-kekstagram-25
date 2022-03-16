import {getRandomIntInclusive, getRandomArrayElement} from './util.js';

const DESCRIPTIONS = ['Берег моря.Шезлонги.Парк.', 'Креативный знак, указывающий по направлению к пляжу.', 'Берег океана', 'Роскошная девушка в купальнике с фотоаппаратом в руках.', 'Обед на двоих', 'Черный автомобиль'];

const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const USER_NAMES = ['Денис', 'Максим', 'Юлия', 'Андрей', 'Мария', 'Елена', 'Алексей', 'Маргарита', 'Олег', 'Игорь'];

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_NUMBER = 1;
const MAX_NUMBER = 6;

const SIMILAR_COMMENT_COUNT = 5;
const SIMILAR_PHOTOS_COUNT = 25;

const createComment = (id) => ({
  id: id+1,
  avatar: `img/avatar-${  getRandomIntInclusive(MIN_NUMBER, MAX_NUMBER)  }.svg`,
  message: getRandomArrayElement(MESSAGES),
  userName: getRandomArrayElement(USER_NAMES)
});

const createDescriptionPhoto = (id) => ({
  id: id+1,
  url: `photos/${String(id+1)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomIntInclusive(MIN_LIKES, MAX_LIKES),
  comments: Array.from({length: SIMILAR_COMMENT_COUNT}, (_, i) => createComment(i))
});

const createDescriptionPhotos = () => Array.from({length: SIMILAR_PHOTOS_COUNT}, (_, i) => createDescriptionPhoto(i));

export {createDescriptionPhotos};
