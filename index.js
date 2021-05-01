// dependantcies
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateManager = require('./generate');

// questons for employee
const writeFileAsync = util.promisify(fs.writeFile);
const questionsManager = () =>{
    return inquirer.prompt([
    {
        type: "input",
        message:"What is your name ? ",
        name: 'manager',
    },
    {
        type:'input',
        message:"What is your ID number?",
        name:'idnumber',
    },
    {
        type:'input',
        message:"what is your email?",
        name:'email',
    },
    {
        type:'input',
        message:"what is your office number?",
        name:'office',
    },
   
]);
};

const nextEmployee = () =>{
    return inquirer.prompt([
     {
        type: 'list',
        message: 'Do you want to add another employee',
        name: 'employee',
        choices: ['Manager','Engineer','Intern'],
    }
]);
};


//  function to initialize app
const init = () => {
    questionsManager()
    nextEmployee()
      .then((data) => writeFileAsync('index.html', generateManager(data)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
   
