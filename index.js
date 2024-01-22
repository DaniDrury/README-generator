// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
function writeToFile(data) {
    fs.writeFile('./examples/README.md', generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0]
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1]
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2]
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3]
            },
            {
                type: 'input',
                name: 'credits',
                message: questions[4]
            },
            {
                type: 'list',
                name: 'license',
                message: questions[5],
                choices: [
                    'Apache License 2.0',
                    'GNU General Public License v3.0',
                    'MIT License',
                    'BSD 2-Clause "Simplified" License',
                    'BSD 3-Clause "New" or "Revised" License',
                    'Boost Software License 1.0',
                    'Creative Commons Zero v1.0 Universal',
                    'Eclipse Public License 2.0',
                    'GNU Affero Genderal Public License v2.1',
                    'GNU General Public License v2.0',
                    'GNU Lesser General Public License v2.1',
                    'Mozilla Public License 2.0',
                    'The Unlicense',
                    'No License'],
                default: 'No License'
            },
            {
                type: 'input',
                name: 'contribute',
                message: questions[6]
            },
            {
                type: 'input',
                name: 'tests',
                message: questions[7]
            },
            {
                type: 'input',
                name: 'github',
                message: questions[8]
            },
            {
                type: 'input',
                name: 'email',
                message: questions[9]
            }
        ])
        .then((answers) => {
            writeToFile(answers);
        });
}

// Function call to initialize app
init();
