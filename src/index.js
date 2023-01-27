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

function decode(expr) {
    let mas = [];
    let mas1 = [];
    let result = '';

    for (let i = 0; i < expr.length; i+=10){
        mas.push(expr.slice(i, i+10));
    }

    mas.forEach(value => {
        mas1.push(value.replace(/10/ig, ".").replace(/11/ig, "-").replace(/[0]/g, ''));
    });

    mas1.forEach(value => {
        for (let key in MORSE_TABLE) {
          if (value === key) {
            result += MORSE_TABLE[key]
          }
        } if (value === '**********') {
            result += ' ';
        }
    })
    return result;
}

module.exports = {
    decode
}