const supertest = require('supertest');

const app = supertest.agent('http://localhost:3000');

describe('#Post /{value}', function() {
    it('should succesfully return the converted number', function(){
        const given = 42;
        return app
            .post(`/${given}`)
            .expect(200, {
                success: true,
                result: 'XLII'
            });
    });

    describe('should fail with the correct error message', function(){
        it('with a negative number', function(){
            const given = -1;
            return app
                .post(`/${given}`)
                .expect(200, {
                    success: false,
                    e: 'value must be between ]0, 100]'
                });
        });

        it('with 0', function(){
            const given = 0;
            return app
                .post(`/${given}`)
                .expect(200, {
                    success: false,
                    e: '0 doest not exist in Roman format'
                });
        });

        it('with something that is not a number', function(){
            const given = 'a';
            return app
                .post(`/${given}`)
                .expect(200, {
                    success: false,
                    e: `${given} is not a number`
                });
        });
    });
});