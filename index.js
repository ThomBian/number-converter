const express = require('express');
const converter = require('converter');

const app = express();

function convertRoman(req, res) {
    const value = res.params.value;
    console.log('youhou');
    return converter.toRoman(value)
        .then(converted => {
            res.send(JSON.stringify({
                success: true,
                result: converted
            }));
        })
        .catch(e => {
            res.send(JSON.stringify({
                success: false,
                e
            }));
        });
}

app.post('/:value', convertRoman);

app.listen(3000, () => console.log('Example app listening on port 3000!'));