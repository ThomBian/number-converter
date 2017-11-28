const valueInput = document.getElementById('inputValue');
const errorField = document.getElementById('error');
const successField = document.getElementById('answer');

function convert() {
    errorField.innerHTML = '';
    successField.innerHTML = '';
    const toConvert = valueInput.value;
    if (!toConvert) {
        display(errorField, 'Error : Value is empty');
    } else {
        get(toConvert);   
    }
}

function display(field, message) {
    field.innerHTML = message;
}

function get (value) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                const data = JSON.parse(this.responseText);
                data.success ? 
                    display(successField, `Result : ${data.result}`) : display(errorField, `Error : ${data.e}`);
            }
        }
    };
    xhttp.open("POST", `http://localhost:3000/api/${value}`, true);
    xhttp.send(null);
}