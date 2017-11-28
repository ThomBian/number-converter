# number-converter
Number (]0-100]) to romain format converter

Backend is NodeJS and frontend does not use any framework

Tests : mocha, chai, chai-as-promised

# Test the project
* You need Node, ensure that everything is set up on your environnement before going on
* Clone the repository wherever you want on your system
* Ensure you are on the master branch of the git repository (git branch)
* The code on master is the first part of the project : HTTP classic
* To launch the unit tests : npm test
* To test the app : node server.js and go on [app](localhost:3000) and have fun
* Once you are happy with that part, you can check the second part of the project : SSE communications
* Switch on the 'sse' branch, to do so perform : git fetch -p and then git checkout sse
* If you are sure you are on the rigth branch you can now type node server.js and use [app](localhost:3000) to test, you should see some differences regarding the display and the answer. 
