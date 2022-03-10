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

const checkLength = function (inputText, maxLength) {
  return inputText.length <= maxLength;
};

checkLength('Привет! Как дела?', 140);

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

export {getRandomIntInclusive, getRandomArrayElement};
