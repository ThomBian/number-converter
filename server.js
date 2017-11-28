const express = require('express');
const path = require('path');

const converter = require('./converter');

const app = express();
app.use(express.static('public'));

function convertRoman(req, res) {
    const value = req.params.value;
    console.log('youhou', value);
    return converter.toRoman(value)
        .then(converted => {
            res.send({
                success: true,
                result: converted
            });
        })
        .catch(e => {
            res.send({
                success: false,
                e: e.message
            });
        });
}

function home(req, res) {
    res.sendFile(path.join(`${__dirname}/public/index.html`));
}

app
    .post('/api/:value', convertRoman)
    .get('/', home);

app.listen(3000, () => console.log('Example app listening on port 3000!'));