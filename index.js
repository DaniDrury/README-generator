// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    'What is the Title of your project?',
    'Describe your project:',
    'How do users install the project?',
    'How do users use the project?',
    'List collaborators, 3rd party assets and/or tutorials followed:',
    'Which license does your project use?',
    'How can users contribute to your project?',
    'What tests are available for the project and how does the user run those tests?',
    'What is your GitHub username?',
    'What is your email address?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'location',
                message: 'Where are you from?',
            },
            {
                type: 'input',
                name: 'hobby',
                message: 'What is your favorite hobby?',
            },
            {
                type: 'input',
                name: 'food',
                message: 'What is your favorite food?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub Username',
            },
            {
                type: 'input',
                name: 'linkedin',
                message: 'Enter your LinkedIn URL.',
            },
        ])
        .then((answers) => {
            const htmlPageContent = generateHTML(answers);

            fs.writeFile('index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
            );
        });
}

// Function call to initialize app
init();
