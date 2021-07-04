//variables
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

//use writeFileAsync as a promise. 
const writeFileAsync = util.promisify(fs.writeFile);

//function to call when user prompt
function userPrompt (){
    return inquirer
            .prompt([
                     {
              type: 'input',
              name: 'name',
              message: 'What is your name?',
              validate: function (input) {
                
              //the async method makes sure that a promise is returned and the code is asynchronous
            // Declare function as asynchronous, and save the done callback
            var done = this.async();
            
            // Do async stuff
            setTimeout(function() {
              if (typeof input !== 'string') {
                // Pass the return value in the done callback
                done('You need to provide an answer');
                return;
              }
              // Pass the return value in the done callback
              done(null, true);
            },1000);
          }
            },
        
        
            {
              type: 'input',
              name: 'title',
              message: 'whats the title of your project?',
               validate: function (input) {
            // Declare function as asynchronous, and save the done callback
            var done = this.async();
            
            // Do async stuff
            setTimeout(function() {
              if (typeof input !== 'string') {                                              
                // Pass the return value in the done callback
                done('You need to provide an answer');
                return;
              }
              // Pass the return value in the done callback
              done(null, true);
            },1000);
            }
            },
        
            {
              type: 'input',
              name: 'description',
              message: 'how does it work?',
              validate: function (input) {
            // Declare function as asynchronous, and save the done callback
            var done = this.async();
            
            // Do async stuff
            setTimeout(function() {
              if (typeof input !== 'string') {
                // Pass the return value in the done callback
                done('You need to provide an answer');
                return;
              }
              // Pass the return value in the done callback
              done(null, true);
            }, 1000);
            }
            },
        
            {
              type: 'input',
              name: 'installaton',
              message: 'describe installation process if any?',
              choice:['download','disc'],
               validate: function (input) {
            // Declare function as asynchronous, and save the done callback
            var done = this.async();
            
            // Do async stuff
            setTimeout(function() {
              if (typeof input !== 'string') {
                // Pass the return value in the done callback
                done('You need to provide an answer');
                return;
              }
              // Pass the return value in the done callback
              done(null, true);
            },1000);
            }
            },

            {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
            },


            {
              type: 'list',
              name: 'licence',
              message: 'what licence do you use',
              choices: ['MIT','apache licence','bsd licence','isc licence','bsd licence','ibm public licence'],
              validate: function (input) {
            // Declare function as asynchronous, and save the done callback
            var done = this.async();
            
            // Do async stuff
            setTimeout(function() {
              if (typeof input !== 'string') {
                // Pass the return value in the done callback
                done('You need to provide an answer');
                return;
              }
              // Pass the return value in the done callback
              done(null, true);
            }, 1000);
            }
            }, 

        
            {
              type: 'input',
              name: 'contributors',
              message: 'are there any contributors of this project',
            },
            
            {
              type: "input",
              name: "test",
              message: "is there any test for this application?",
            },



            {
              type: 'input',
              name: 'email',
              message: 'whats your email address?', 
              validate: function (input) {
            // Declare function as asynchronous, and save the done callback
            var done = this.async();
            
            // Do async stuff
            setTimeout(function() {
              if (typeof input !== 'string') {
                // Pass the return value in the done callback
                done('You need to provide an answer');
                return;
              }
              // Pass the return value in the done callback
              done(null, true);
            },1000);
            }
            },

            {
              type: 'input',
              name: 'username',
              message: 'Enter your GitHub Username',
               validate: function (input) {
            // Declare function as asynchronous, and save the done callback
            var done = this.async();
            
            // Do async stuff
            setTimeout(function() {
              if (typeof input !== 'string') {
                // Pass the return value in the done callback
                done('You need to provide an your username');
                return;
              }
              // Pass the return value in the done callback
              done(null, true);
            },1000);
            }
            },

            
                ]
            )
            
    };
            


    //use writeFileAsync as a promise

            
    const init = () => {
        userPrompt()
        .then((data) => {
          console.log("***********")
          console.log(data); // --> answers { 'name': 'steven', 'title': 'ReadmeGenerator'}
          console.log("***********")
          const readme = generateMarkdown(data)
          writeFileAsync('readme.md', readme)
        })
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
    };
    
    init();










  