const lengthCheck = (string, maxLength) => {
  if (string.length < maxLength || string.length === maxLength) {
    return true;
  }

  return false;
};

lengthCheck('проверяемая строка', 20);
lengthCheck('проверяемая строка', 18);
lengthCheck('проверяемая строка', 10);


const isPalindrome = (string) => {
  const lowerCaseString = string.toLowerCase();
  const withOutSpaceString = lowerCaseString.replaceAll(' ', '');
  const checkedString = withOutSpaceString;
  let invertedString = '';

  for(let i = checkedString.length - 1; i >= 0; i--) {
    invertedString += checkedString[i];
  }

  if (invertedString === checkedString) {
    return true;
  }

  return false;
};

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');


const getNumbers = (string) => {
  if (typeof string !== 'number') {
    const withOutSpaceString = string.replaceAll(' ', '');
    const checkedString = withOutSpaceString;
    let numberString = '';
    for(let i = 0; i <= checkedString.length - 1; i++) {
      if(checkedString[i] === '0') {
        numberString += '0';
      } else if(checkedString[i] === '1') {
        numberString += '1';
      } else if(checkedString[i] === '2') {
        numberString += '2';
      } else if(checkedString[i] === '3') {
        numberString += '3';
      } else if(checkedString[i] === '4') {
        numberString += '4';
      } else if(checkedString[i] === '5') {
        numberString += '5';
      } else if(checkedString[i] === '6') {
        numberString += '6';
      } else if(checkedString[i] === '7') {
        numberString += '7';
      } else if(checkedString[i] === '8') {
        numberString += '8';
      } else if(checkedString[i] === '9') {
        numberString += '9';
      }
    }

    if (numberString.length > 0) {
      return Number(numberString);
    }

    return NaN;
  } else {
    const numberResult = string.toString().replaceAll('.', '');

    return Math.abs(numberResult);
  }
};

getNumbers('2023 год');
getNumbers('ECMAScript 2022');
getNumbers('1 кефир, 0.5 батона');
getNumbers('агент 007');
getNumbers('а я томат');
getNumbers(2023);
getNumbers(-1);
getNumbers(1.5);


const characterAdditional = (originString, minLength, additionalСharacters) => {
  if (originString.length <= minLength) {
    const indexEnd = minLength - 1;
    let temporaryString = '';
    let result = '';

    for(let i = 0; i < minLength - 1; i++) {
      temporaryString += additionalСharacters;
    }

    result = temporaryString.slice(0, indexEnd);
    result += originString;
    return result;
  } else {
    return originString;
  }
};

characterAdditional('1', 2, '0');
characterAdditional('1', 4, '0');
characterAdditional('q', 4, 'werty');
characterAdditional('q', 4, 'we');
characterAdditional('qwerty', 4, '0');
