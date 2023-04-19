// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title'
    },
    {
        type: 'input',
        name: 'synopsis',
        message: 'Give a short description'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['MIT', 'APACHE 2.0', 'GLP 3.0', 'BSD 3']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are your installations instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are your usage instructions?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are you contributing guidelines?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What test did you use'
    },
    {
        type: 'input',
        name:'github',
        message: 'What is your github user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
const markdownData = generateMarkdown(data);
console.log(markdownData)
fs.writeFile(fileName, markdownData, (err)=>{
    err ? console.log(err) :console.log('success')
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=>{
        writeToFile('README.md', data)
    })
}


// Function call to initialize app
init();
