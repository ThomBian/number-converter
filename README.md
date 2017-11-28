# number-converter
Number (]0-100]) to romain format converter

Backend is NodeJS and frontend does not use any framework

Tests : mocha, chai, chai-as-promised

# Test the project
* You need Node, ensure that everything is set up on your environnement before going on
* Clone the repository wherever you want on your system
* Go in the folder freshely created : ```cd number-converter```
* Ensure you are on the master branch of the git repository (```git branch```)
* The code on master is the first part of the project : HTTP classic
* To test the app : ```node server.js``` and go on [app](http://localhost:3000) and have fun
* To launch the unit tests : ```npm test```, you need to set the server up to assert that all the tests will run properly
* Once you are happy with that part, you can check the second part of the project : SSE communications
* Switch on the 'sse' branch, to do so perform : ```git fetch -p``` and then ```git checkout sse```
* If you are sure you are on the rigth branch you can now type ```node server.js``` and use [app](http://localhost:3000) to test, you should see some differences regarding the display and the answer. 
