const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const axios = require('axios');

const appendFileAsync = util.promisify(fs.appendFile);
const writeFileAsync = util.promisify(fs.writeFile);

const question = [
    {
        type: "input",
        message: "What is the Title of your project?",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Please add a description",
        name: "description"
    },
    {
        type: "input",
        message: "Please add table of contents",
        name: "tableOfContents",
    },

];

function writeToFile(fileName, data) {

}

function init() {

}

inquirer.prompt(question).then(function(res){
    const {  }
    appendFileAsync("README.md", )
})
init();