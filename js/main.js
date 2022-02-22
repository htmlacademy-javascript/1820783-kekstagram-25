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
