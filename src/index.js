const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(code) {
    let result = '';
    code = code.split('');
    const countWords = code.length / 10;

    for (let i = 0; i < countWords; i++) {
      let wordNumbers = code.slice(0, 10);
      if (wordNumbers[0] === '*') {
        code = code.slice(10, code.length);
        result += ' ';
        continue;
      }
      let letterString = '';

      for (let i = 0; i < 5; i++) {
        const letterNumbers = wordNumbers.slice(0, 2);
        if (letterNumbers[0] === '1' && letterNumbers[1] === '0') {
          letterString += '.';
        } else if (letterNumbers[0] === '1' && letterNumbers[1] === '1') {
          letterString += '-';
        }

        wordNumbers = wordNumbers.slice(2, wordNumbers.length);

      }

      result += MORSE_TABLE[letterString];    
      code = code.slice(10, code.length);

    }

    return result;
}

module.exports = {
    decode
}
