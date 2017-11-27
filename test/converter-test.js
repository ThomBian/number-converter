const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

// Then either:
var expect = chai.expect;

chai.should();

const converter = require('../converter')

describe('Converter module tests', function(){
    
    it('should fail to convert a string', function(){
        const given = 'a';
        return expect(converter.toRoman(given))
            .to.eventually.be.rejectedWith(`${given} is not a number`)
            .and.be.an.instanceOf(Error);
    });

    it('should fail to convert an Array', function(){
        const given = [];
        return expect(converter.toRoman(given))
            .to.eventually.be.rejectedWith(`${given} is not a number`)
            .and.be.an.instanceOf(Error);
    });

    it('should fail to convert an Object', function(){
        const given = {};
        return expect(converter.toRoman(given))
            .to.eventually.be.rejectedWith(`${given} is not a number`)
            .and.be.an.instanceOf(Error);
    });

    it('should fail to convert a boolean', function(){
        const given = true;
        return expect(converter.toRoman(given))
            .to.eventually.be.rejectedWith(`${given} is not a number`)
            .and.be.an.instanceOf(Error);
    });

    it('should fail to convert an empty value', function(){
        const given = '';
        return expect(converter.toRoman(given))
            .to.eventually.be.rejectedWith('value is empty')
            .and.be.an.instanceOf(Error);
    });

    it('should fail to convert negative number', function(){
        const given = -1;
        return expect(converter.toRoman(given))
            .to.eventually.be.rejectedWith('value must be between ]0, 100]')
            .and.be.an.instanceOf(Error);        
    });

    it('should fail to convert a number over 100', function(){
        const given = 101;
        return expect(converter.toRoman(given))
        .to.eventually.be.rejectedWith('value must be between ]0, 100]')
        .and.be.an.instanceOf(Error);
    });

    it('should fail to convert 0', function(){
        const given = 0;
        return expect(converter.toRoman(given))
        .to.eventually.be.rejectedWith('0 doest not exist in Roman format')
        .and.be.an.instanceOf(Error);
    });

    it('should convert 1 in I', function(){
        const given = 1;
        return converter.toRoman(given).should.eventually.equal('I');        
    });

    it('should convert 3 in III', function(){
        const given = 3;
        return converter.toRoman(given).should.eventually.equal('III');        
    });

    it('should convert 4 in IV', function(){
        const given = 4;
        return converter.toRoman(given).should.eventually.equal('IV');        
    });

    it('should convert 6 in VI', function(){
        const given = 6;
        return converter.toRoman(given).should.eventually.equal('VI');        
    });

    it('should convert 9 in IX', function(){
        const given = 9;
        return converter.toRoman(given).should.eventually.equal('IX');        
    });

    it('should convert 10 in X', function(){
        const given = 10;
        return converter.toRoman(given).should.eventually.equal('X');        
    });

    it('should convert 11 in XI', function(){
        const given = 11;
        return converter.toRoman(given).should.eventually.equal('XI');        
    });

    it('should convert 19 in XIX', function(){
        const given = 19;
        return converter.toRoman(given).should.eventually.equal('XIX');        
    });

    it('should convert 22 in XXII', function(){
        const given = 22;
        return converter.toRoman(given).should.eventually.equal('XXII');        
    });

    it('should convert 33 in XXXIII', function(){
        const given = 33;
        return converter.toRoman(given).should.eventually.equal('XXXIII');        
    });

    it('should convert 40 in XL', function(){
        const given = 40;
        return converter.toRoman(given).should.eventually.equal('XL');        
    });

    it('should convert 49 in XLIX', function(){
        const given = 49;
        return converter.toRoman(given).should.eventually.equal('XLIX');        
    });

    it('should convert 50 in L', function(){
        const given = 50;
        return converter.toRoman(given).should.eventually.equal('L');        
    });

    it('should convert 52 in LII', function(){
        const given = 52;
        return converter.toRoman(given).should.eventually.equal('LII');        
    });

    it('should convert 63 in LXIII', function(){
        const given = 63;
        return converter.toRoman(given).should.eventually.equal('LXIII');        
    });

    it('should convert 74 in LXXIV', function(){
        const given = 74;
        return converter.toRoman(given).should.eventually.equal('LXXIV');        
    });

    it('should convert 85 in LXXXV', function(){
        const given = 85;
        return converter.toRoman(given).should.eventually.equal('LXXXV');        
    });

    it('should convert 96 in XCVI', function(){
        const given = 96;
        return converter.toRoman(given).should.eventually.equal('XCVI');        
    });

    it('should convert 99 in XCIX', function(){
        const given = 99;
        return converter.toRoman(given).should.eventually.equal('XCIX');        
    });

    it('should convert 100 in 100', function(){
        const given = 100;
        return converter.toRoman(given).should.eventually.equal('C');        
    });
})