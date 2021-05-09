// dependantcies
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateManager = require('./generate');
let employ = []

// questons for employee number one
 const writeToFile = util.promisify(fs.writeFile);

const questionsStart=() => {
    inquirer
    .prompt([
    {
        type: "input",
        message:"What is your name ? ",
        name: 'employee',
    },
    {
        type:'input',
        message:"What is your ID number?",
        name:'idnumber1',
    },
    {
        type:'input',
        message:"what is your email?",
        name:'email1',
    },
])
.then ((data)=>{
    if (data.email1 = " ")
    {
        nextEmployee()
    }
})
};

const nextEmployee = () =>{
     inquirer.prompt([
     {
        type: 'list',
        message: 'Do you want to add another employee',
        name: 'employee',
        choices: ['Manager','Engineer','Intern','No more'],
    }
])
.then ((data2)=>{
    if (data2.employee ==='Manager'){
        questionsManager()
    }
    else if (data2.employee === 'Engineer'){
        questionsEngineer()
    }
    else if (data2.employee === 'Intern'){
        questionsIntern()
    }
    else {
        console.log ("Webpage being created")
    }
})
};
// manager questions
const questionsManager = () =>{
     inquirer.prompt([
    {
        type: "input",
        message:"What is your name ? ",
        name: 'manager',
    },
    {
        type:'input',
        message:"What is your ID number?",
        name:'idnumber2',
    },
    {
        type:'input',
        message:"what is your email?",
        name:'email2',
    },
    {
        type:'input',
        message:"what is your office number?",
        name:'office',
    },
   
])
.then ((data3)=>{
    if (data3.office = " ")
    {
        nextEmployee()
    }
})
};
// engineer questions
const questionsEngineer = () =>{
     inquirer.prompt([
    {
        type: "input",
        message:"What is your name ? ",
        name: 'engineer',
    },
    {
        type:'input',
        message:"What is your ID number?",
        name:'idnumber3',
    },
    {
        type:'input',
        message:"what is your email?",
        name:'email3',
    },
    {
        type:'input',
        message:'What is your Github username?',
        name:'github',
    },
   
])
.then ((data4)=>{
    if (data4.github = " ")
    {
        nextEmployee()
    }
})
};
// intern questions
const questionsIntern = () =>{
     inquirer.prompt([
    {
        type: "input",
        message:"What is your name ? ",
        name: 'intern',
    },
    {
        type:'input',
        message:"What is your ID number?",
        name:'idnumber4',
    },
    {
        type:'input',
        message:"what is your email?",
        name:'email4',
    },
    {
        type:'input',
        message:"what school did you attend?",
        name:'school',
    },
   
])
.then ((data5)=>{
    if (data5.school = " ")
    {
        nextEmployee()
    }
})
};
//  function to initialize app
const init = () => {
    questionsStart()
      .then( ()=> {writeToFile('./team.html',)})
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
   
