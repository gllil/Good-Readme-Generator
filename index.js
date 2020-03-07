const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const axios = require('axios');

const genMrkDwn = require('./utils/generateMarkdown');

// const appendFileAsync = util.promisify(fs.appendFile);
const writeFileAsync = util.promisify(fs.writeFile);

const question = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        default: 'username'
    },
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
        default: 'Title'
    },
    {
        type: 'input',
        message: 'Provide a description for your project',
        name: 'description',
        default: 'Description'
    },
    {
        type: 'input',
        message: 'Installation Commands',
        name: 'installation',
        default: 'Installation'
    },
    {
        type: 'input',
        message: 'Commmand to run test',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What does the user need to know to use this repo',
        name: 'usage',
        default: 'Usage'
    },
    {
        type: 'input',
        message: 'What is your contribution',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'License',
        name: 'license',
        default: 'MIT'
    },

];

function writeToFile(fileName, data) {

writeFileAsync(fileName, data).then(function(){
    console.log("README.md file created")
})
.catch(function(err){
    console.log(err);
})

}




function init() {
    inquirer.prompt(question).then(function(data){
        const queryURL = `https://api.github.com/users/${response.github}`;
        axios.get(queryURL).then(function(res){
            const info = {
                username: data.username,
                title: data.title,
                description: data.description,
                installation: data.installation,
                test: data.test,
                usage: data.usage,
                contribution: data.contribution,
                license: data.license,

                name: res.info.login,
                email: "garyjllil@gmail.com",
                picture: res.info.avatar_url,
            }
            const content = genMrkDwn(info);
            writeToFile("README.md", content);
        }).catch(function(err){
            if(err) throw err;
        })
        
    }).catch(function(err){
        console.log(err);
            
    })
    
}

init();