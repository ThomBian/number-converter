function toRoman (digit) {
    return new Promise((resolve, reject)=> {
        if (isNaN(digit) || Array.isArray(digit) || typeof(digit) === 'boolean') {
            reject(new Error(`${digit} is not a number`));
        }
        if (digit === '') {
            reject(new Error('value is empty'));
        }
        if (digit === 0) {
            reject(new Error('0 doest not exist in Roman format'));
        }
        if (digit < 0 || digit > 100) {
            reject(new Error('value must be between ]0, 100]'));
        }
        resolve(_convertToRoman(digit));
    });
}

function _convertToRoman (digit) {
    let remaining = digit;
    let returnValue = '';
    while (remaining > 0) {
        if (remaining === 100) {
            returnValue = 'C';
            remaining -= 100;
        } else if (remaining - 90 > 0) {
            returnValue = 'XC';
            remaining -= 90;
        } else if (remaining - 50 >= 0) {
            returnValue = 'L';
            remaining -= 50;
        } else if (remaining - 40 >= 0) {
            returnValue = 'XL';
            remaining -= 40;
        } else if (remaining - 10 >= 0) {
            returnValue = `${returnValue}X`;
            remaining -= 10;
        }
        else if (remaining === 9) {
            returnValue = `${returnValue}IX`;
            remaining -= 9;
        } else if (remaining - 5 >= 0) {
            returnValue = `${returnValue}V`;
            remaining -= 5;
        } else if (remaining === 4) {
            returnValue = `${returnValue}IV`;
            remaining -= 4;
        } else {
            returnValue = `${returnValue}I`;
            remaining -= 1;
        }
    }
    return returnValue;
}

module.exports = {
    toRoman
}