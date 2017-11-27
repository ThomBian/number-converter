const supertest = require('supertest');

const app = supertest.agent('http://localhost:3000');

describe.only('#Post /{value}', function() {
    it('should succesfully return the converted number', function(){
        const given = 42;
        return app
            .post(`/${given}`)
            .expect(200, {
                sucess: true,
                result: 'XCII'
            });
    });
});