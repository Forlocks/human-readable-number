module.exports = function toReadable (number) {
  let firstPhrase = '';
  let secondPhrase = '';
  let thirdPhrase = '';

  number = number.toString();

  if (number[(number.length - 3)] !== undefined) {
    switch (number[number.length - 3]) {
      case '1':
        firstPhrase = 'one hundred';
        break;
      case '2':
        firstPhrase = 'two hundred';
        break;
      case '3':
        firstPhrase = 'three hundred';
        break;
      case '4':
        firstPhrase = 'four hundred';
        break;
      case '5':
        firstPhrase = 'five hundred';
        break;
      case '6':
        firstPhrase = 'six hundred';
        break;
      case '7':
        firstPhrase = 'seven hundred';
        break;
      case '8':
        firstPhrase = 'eight hundred';
        break;
      case '9':
        firstPhrase = 'nine hundred';
        break;
    }
  }

  if (number[number.length - 2] !== undefined) {
    if (number[number.length - 2] === '1') {
      switch (number[number.length - 1]) {
        case '0':
          secondPhrase = 'ten';
          break;
        case '1':
          secondPhrase = 'eleven';
          break;
        case '2':
          secondPhrase = 'twelve';
          break;
        case '3':
          secondPhrase = 'thirteen';
          break;
        case '4':
          secondPhrase = 'fourteen';
          break;
        case '5':
          secondPhrase = 'fifteen';
          break;
        case '6':
          secondPhrase = 'sixteen';
          break;
        case '7':
          secondPhrase = 'seventeen';
          break;
        case '8':
          secondPhrase = 'eighteen';
          break;
        case '9':
          secondPhrase = 'nineteen';
          break;
      }

      if (firstPhrase === '') {
        return secondPhrase;
      } else {
        return firstPhrase + ' ' + secondPhrase;
      }
    } else {
      switch (number[number.length - 2]) {
        case '2':
          secondPhrase = 'twenty';
          break;
        case '3':
          secondPhrase = 'thirty';
          break;
        case '4':
          secondPhrase = 'forty';
          break;
        case '5':
          secondPhrase = 'fifty';
          break;
        case '6':
          secondPhrase = 'sixty';
          break;
        case '7':
          secondPhrase = 'seventy';
          break;
        case '8':
          secondPhrase = 'eighty';
          break;
        case '9':
          secondPhrase = 'ninety';
          break;
      }
    }
  }

  if (number[number.length - 1] !== undefined) {
    switch (number[number.length - 1]) {
      case '0':
        thirdPhrase = '';
        break;
      case '1':
        thirdPhrase = 'one';
        break;
      case '2':
        thirdPhrase = 'two';
        break;
      case '3':
        thirdPhrase = 'three';
        break;
      case '4':
        thirdPhrase = 'four';
        break;
      case '5':
        thirdPhrase = 'five';
        break;
      case '6':
        thirdPhrase = 'six';
        break;
      case '7':
        thirdPhrase = 'seven';
        break;
      case '8':
        thirdPhrase = 'eight';
        break;
      case '9':
        thirdPhrase = 'nine';
        break;
    }
  }

  if (number === '0') {
    return 'zero'
  } else if (number.length === 3) {
    if (thirdPhrase === '') {
      if (secondPhrase === '') {
        return firstPhrase;
      } else {
        return firstPhrase + ' ' + secondPhrase;
      }
    } else {
      if (secondPhrase === '') {
        return firstPhrase + ' ' + thirdPhrase;
      } else {
        return firstPhrase + ' ' + secondPhrase + ' ' + thirdPhrase;
      }
    }
  } else if (number.length === 2) {
    if (thirdPhrase === '') {
      return secondPhrase;
    } else {
      return secondPhrase + ' ' + thirdPhrase;
    }
  } else if (number.length === 1) {
    return thirdPhrase;
  }
}
