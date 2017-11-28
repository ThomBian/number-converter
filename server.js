const express = require('express');
const path = require('path');

const converter = require('./modules/converter');

const app = express();
app.use(express.static('public'));

let connection;

function convertRoman(req, res) {
    const value = req.params.value;
    res.sendStatus(200);
    return converter.toRoman(value)
        .then(converted => {
            sendValue({
                success: true,
                result: converted
            });
        })
        .catch(e => {
            sendValue({
                success: false,
                e: e.message
            });
        });
}

function register(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });
    connection = res;
}

function sendValue (data) {
    if (connection) {
        connection.write(`data: ${JSON.stringify(data)} \n\n`);
    }
}

function home(req, res) {
    res.sendFile(path.join(`${__dirname}/public/index.html`));
}

app
    .post('/api/:value', convertRoman)
    .get('/sub', register)
    .get('/', home);

app.listen(3000, () => console.log('Example app listening on port 3000!'));