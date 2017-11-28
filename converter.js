const converterTranslate = [{
        valInNumber:100, valInRoman: 'C'
    },{
        valInNumber:90, valInRoman: 'XC'
    },{
        valInNumber:50, valInRoman: 'L'
    },{
        valInNumber:40, valInRoman: 'XL'
    },{
        valInNumber:10, valInRoman: 'X'
    },{
        valInNumber:9, valInRoman: 'IX'
    },{
        valInNumber:5, valInRoman: 'V'
    },{
        valInNumber:4, valInRoman: 'IV'
    },{
        valInNumber:1, valInRoman: 'I'
    }];

function toRoman (digit) {
    return new Promise((resolve, reject)=> {
        if (isNaN(digit) || Array.isArray(digit) || typeof(digit) === 'boolean') {
            reject(new Error(`${digit} is not a number`));
        }
        if (digit === '') {
            reject(new Error('value is empty'));
        }
        if (digit == 0) {
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
    let indexInTranslater = 0;
    let returnValue = '';
    while (remaining > 0) {
        const currentTranslation = converterTranslate[indexInTranslater];
        if (remaining - currentTranslation.valInNumber >= 0) {
            returnValue = `${returnValue}${currentTranslation.valInRoman}`;
            remaining -= currentTranslation.valInNumber;
        } else {
            indexInTranslater++;
        }
    }
    return returnValue;
}

module.exports = {
    toRoman
}