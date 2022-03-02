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


const DESCRIPTION = ['Берег моря.Шезлонги.Парк.', 'Креативный знак, указывающий по направлению к пляжу.', 'Берег океана', 'Роскошная девушка в купальнике с фотоаппаратом в руках.', 'Обед на двоих', 'Черный автомобиль'];

const message = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const userName = [ 'Денис', 'Максим', 'Юлия', 'Андрей', 'Мария', 'Елена', 'Алексей', 'Маргарита', 'Олег', 'Игорь'];

const SIMILAR_COMMENT_COUNT = 5;
const SIMILAR_PHOTOS_COUNT = 25;

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const ID = [];

for (let i=1; i<=SIMILAR_PHOTOS_COUNT; i++) {
  ID.push(i);
}

//создание массива объектов - список комментариев
//Нумерация ID_COMMENTS при таком способе создания массива зациклилась на 1, ниже другой способ(закомментирован), там нумерация работает нормально

const createComments = () => {
  for (let i=0; i<SIMILAR_COMMENT_COUNT; i++) {
    return {
      ID_COMMENTS: (i+1),
      avatar: `img/avatar-${  getRandomIntInclusive(1, 6)  }.svg`,
      message: getRandomArrayElement(message),
      userName: getRandomArrayElement(userName)
    };
  }
};

createComments();
const similarComments = Array.from({length: SIMILAR_COMMENT_COUNT}, createComments);


//создание массива объектов - описание опубликованной фотографии
//Нумерация ID и url при таком способе создания массива зациклилась на 1, ниже другой способ (закомментирован), там нумерация работает нормально

const createDescriptionPhoto = () => {
  for (let i=0; i<=ID.length; i++) {
    return {
      ID: (i+1),
      url: `photos/${  i+1  }.jpg`,
      description: DESCRIPTION[getRandomIntInclusive(1, 5)],
      likes: getRandomIntInclusive(15, 200),
      comments: similarComments
    };
  }
};

createDescriptionPhoto();
Array.from({length: SIMILAR_PHOTOS_COUNT}, createDescriptionPhoto);


////Нумерация ID_COMMENTS при таком способе работает нормально

//let userComments = [];
// const createComments = () => {
//  for (let i=0; i<10; i++) {
//    userComments[i] = {
//      ID_COMMENTS: (i+1),
//      avatar: ('img/avatar-' + getRandomIntInclusive(1, 5) + '.svg'),
//      message: getRandomArrayElement(message),
//      userName: getRandomArrayElement(userName)
//    }
//  }
//  return userComments;
//}
//createComments();
//console.log(userComments);

////Нумерация ID_COMMENTS при таком способе работает нормально

//let userPhoto = [];

//const createDescriptionPhoto = () => {
//  for (let i=0; i<ID.length; i++) {
//    userPhoto[i] = {
//      ID: (i+1),
//      url: 'photos/' + (i+1) + '.jpg',
//      description: DESCRIPTION[getRandomIntInclusive(1, 6)],
//      likes: getRandomIntInclusive(15, 200),
//      comments: userComments
//    }
//  }
//  return userPhoto;
//}

//const newPhotos = createDescriptionPhoto();
