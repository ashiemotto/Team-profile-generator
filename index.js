// dependantcies
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateManager = require('./src/generate');

// libraries 
const employee = require('./lib/employee'); 
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

let employ1 =[];
let employ = [];

// questons for employee number one
 const writeToFile = util.promisify(fs.writeFile);

const questionsStart=[
    {
        type: "input",
        message:"What is your name ? ",
        name: 'employee',
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
]

const nextEmployee = [
     {
        type: 'list',
        message: 'Do you want to add another employee',
        name: 'employee',
        choices: ['Manager','Engineer','Intern','No more'],
    }
]
// manager questions
const questionsManager = [
    {
        type: "input",
        message:"What is your name ? ",
        name: 'manager',
    },
    {
        type:'input',
        message:"What is your ID number?",
        name:'manageridnumber',
    },
    {
        type:'input',
        message:"what is your email?",
        name:'manageremail',
    },
    {
        type:'input',
        message:"what is your office number?",
        name:'office',
    },
   
]
// engineer questions
const questionsEngineer =[
    {
        type: "input",
        message:"What is your name ? ",
        name: 'engineer',
    },
    {
        type:'input',
        message:"What is your ID number?",
        name:'engineeridnum',
    },
    {
        type:'input',
        message:"what is your email?",
        name:'eemail',
    },
    {
        type:'input',
        message:'What is your Github username?',
        name:'github',
    },
   
]
// intern questions
const questionsIntern =[
    {
        type: "input",
        message:"What is your name ? ",
        name: 'intern',
    },
    {
        type:'input',
        message:"What is your ID number?",
        name:'internidnumber',
    },
    {
        type:'input',
        message:"what is your email?",
        name:'internemail',
    },
    {
        type:'input',
        message:"what school did you attend?",
        name:'school',
    },
   
]

const  startDoc = () => {return inquirer.prompt(questionsStart)}
const  nextQuestion = () => {return inquirer.prompt(nextEmployee)}






const addManager = () => {
    inquirer.prompt (questionsManager)
.then ((data)=>{
    employ.push(new manager(data.manager, data.manageridnumber, data.manageremail,data.office));
    console.log(employ)
})
    
    .then( 
        () =>{ addNewEmployee()}
        )
};

const addEngineer = () =>{
    inquirer.prompt(questionsEngineer)
.then ((data)=>{
    employ.push(new engineer(data.engineer, data.engineeridnum, data.eemail,data.github));
    console.log(employ)
})
    
    .then( 
        () =>{ addNewEmployee()}
        )

};


const addIntern = () => {
    inquirer.prompt(questionsIntern)
.then ((data)=>{
    employ.push(new intern(data.intern, data.internidnumber, data.internemail,data.school));
    console.log(employ)
})
    
    .then( 
        () =>{ addNewEmployee()}
        )

};
const addNewEmployee = () =>{
    
    nextQuestion ()
.then ((data)=>{
    if (data.employee ==='Manager'){
        addManager()
    }
    else if (data.employee === 'Engineer'){
        addEngineer()
    }
    else if (data.employee === 'Intern'){
        addIntern()
    }
    else {
        writeFile ()
        console.log ("Webpage being created")
    }
})
};


//  function to initialize app
const init = () => {
    startDoc()
    .then ((data)=>{
    employ1.push(new employee(data.employee, data.idnumber, data.email));
    console.log(employ1)
})
    
    .then( 
        () =>{ addNewEmployee()}
        )
  .catch((err) => console.error(err));
}

function writeFile (){
      writeToFile('./dist/team.html',generateManager(employ))
      console.log('Successfully wrote to index.html');
  };

// Function call to initialize app
init();
   
