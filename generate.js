  
  // generate HTML page
  function generateManager(data) {
    return `<!DOCTYPE html>

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
            <div class="containermanager">
            <div  style="max-width: 18rem; box-shadow: 5px 10px;">
                <div class="card-header card text-white bg-primary "style ="font-size:25px; font-weight:bold;">${data.employee} Employee</div>
                <div class="card-body card text-dark bg-light ">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${data.idnumber1}</li>
                        <li class="list-group-item">Email:<a href="mailto:${data.email1}">${data.email1}</a></li>
                    </ul>
                </div>
              </div>
          </div>
            <div class="containermanager">
                <div  style="max-width: 18rem; box-shadow: 5px 10px;">
                    <div class="card-header card text-white bg-primary "style ="font-size:25px; font-weight:bold;">${data3.manager} Employee</div>
                    <div class="card-body card text-dark bg-light ">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${data3.idnumber2}</li>
                            <li class="list-group-item">Email:<a href="mailto:${data3.email2}">${data3.email2}</a></li>
                            <li class="list-group-item">Office: ${data3.office}</li>
                        </ul>
                    </div>
                  </div>
              </div>
              <div class="containerengineer">
              <div  style="max-width: 18rem; box-shadow: 5px 10px;">
                  <div class="card-header card text-white bg-primary "style ="font-size:25px; font-weight:bold;">${data4.engineer} Employee</div>
                  <div class="card-body card text-dark bg-light ">
                      <ul class="list-group">
                          <li class="list-group-item">ID: ${data4.idnumber3}</li>
                          <li class="list-group-item">Email:<a href="mailto:${data4.email3}">${data4.email3}</a></li>
                          <li class="list-group-item">Github: ${data4.github}</li>
                      </ul>
                  </div>
                </div>
            </div>
            <div class="containereintern">
            <div  style="max-width: 18rem; box-shadow: 5px 10px;">
                <div class="card-header card text-white bg-primary "style ="font-size:25px; font-weight:bold;">${data5.intern} Employee</div>
                <div class="card-body card text-dark bg-light ">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${data5.idnumber4}</li>
                        <li class="list-group-item">Email:<a href="mailto:${data5.email4}">${data5.email4}</a></li>
                        <li class="list-group-item">School: ${data5.school}</li>
                    </ul>
                </div>
              </div>
          </div>
    
           <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
        </body>
    </html>
  `;
  }
  
  module.exports = generateManager;
  