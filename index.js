const express = require('express');

const converter = require('./converter');

const app = express();

function convertRoman(req, res) {
    const value = req.params.value;
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

app.post('/:value', convertRoman);

app.listen(3000, () => console.log('Example app listening on port 3000!'));