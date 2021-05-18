const employee = require('../lib/employee'); 
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');




  // generate HTML page
  const generateManager = (employ)=> 
     `<!DOCTYPE html>

    <html>
        <head>
            <meta charset="utf-8">
            <title>Team Profile</title>
            <!-- CSS only -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        </head>
    
        <body>
            <div class="container-large p-5 mb-5 text-white bg-danger text-center ">
                <div class="jumbotron ">
                     <h1>My team</h1>
                </div>
            </div>
            <div class="container">
    <div  style="max-width: 18rem; box-shadow: 5px 10px;">
        <div class="card-header card text-white bg-primary "style ="font-size:25px; font-weight:bold;">${employee.name} Employee</div>
        <div class="card-body card text-dark bg-light ">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email:<a href="mailto:${employee.email}">${employee.email}</a></li>
            </ul>
        </div>
      </div>
  </div>
           
           ${cards(employ)}
           
           
             
           
    
           <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
        </body>
    </html>
  `;
  
  
  const cards = (employ) =>{
      let webpage ='';

    employ.forEach(element => {
      
         if (element instanceof Manager){
            webpage = webpage.concat(createManager(element));
        }
        else if (element instanceof Engineer){
            webpage = webpage.concat(createEngineer(element));
        }
        else if (element instanceof Intern){
            webpage = webpage.concat(createIntern(element));
        }
    });
    return webpage;
  }


 const createManager =  (manager) => {
      return `<div class="container">
      <div  style="max-width: 18rem; box-shadow: 5px 10px;">
          <div class="card-header card text-white bg-primary "style ="font-size:25px; font-weight:bold;">${manager.name} Employee</div>
          <div class="card-body card text-dark bg-light ">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${manager.id}</li>
                  <li class="list-group-item">Email:<a href="mailto:${manager.email}">${manager.email}</a></li>
                  <li class="list-group-item">Office: ${manager.officeNumber}</li>
              </ul>
          </div>
        </div>
    </div>`;
  }

  const createEngineer =  (engineer)=>{
      return`
    <div class="container">
    <div  style="max-width: 18rem; box-shadow: 5px 10px;">
        <div class="card-header card text-white bg-primary "style ="font-size:25px; font-weight:bold;">${engineer.name} Employee</div>
        <div class="card-body card text-dark bg-light ">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email:<a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">Github: ${engineer.github}</li>
            </ul>
        </div>
      </div>
  </div>`;
  }

  const createIntern = (intern)=> {
      return`
    <div class="container">
    <div  style="max-width: 18rem; box-shadow: 5px 10px;">
        <div class="card-header card text-white bg-primary "style ="font-size:25px; font-weight:bold;">${intern.name} Employee</div>
        <div class="card-body card text-dark bg-light ">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
      </div>
  </div>`;
  }

  module.exports = generateManager;
  