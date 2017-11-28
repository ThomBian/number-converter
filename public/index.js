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
        post(toConvert);   
    }
}

function display(field, message) {
    field.innerHTML += message;
}

function post (value) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                successField.innerHTML += 'Request has been received';
            }
        }
    };
    xhttp.open("POST", `http://localhost:3000/api/${value}`, true);
    xhttp.send(null);
}

if (!!window.EventSource) {
    var source = new EventSource('/sub')

    source.addEventListener('message', function(e) {
      const data = JSON.parse(e.data)
      if (data.success) {
        display(successField, ` // Result : ${data.result}`);
      } else {
        display(errorField, `Error : ${data.e}`);
      }
    }, false)

    source.addEventListener('open', function(e) {
        console.log('Opened');
    }, false)

    source.addEventListener('error', function(e) {
      if (e.target.readyState == EventSource.CLOSED) {
        console.log("Disconnected")
      }
      else if (e.target.readyState == EventSource.CONNECTING) {
        console.log("Connecting...")
      }
    }, false)
  } else {
    console.log("Your browser doesn't support SSE")
  }