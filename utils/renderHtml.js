const internal = require("stream");
const Engineer = require("../lib/Engineer");

const masterTeam = (profiles) => {
  teamCards = [];

  const createManager = (manager) => {
    return `
<article class="cardTemp">
  <div class="cardHeader cardHeaderManager">
    <h2>Name: ${manager.name}</h2>
  </div>
  <div class="cardBody">
    <h3>Role: ${manager.getRole()}<span></span><i class="fas fa-clipboard-list"></i></h3>
      <ul>
        <li>Email: ${manager.email}</li>
        <li>ID: ${manager.id}</li>
        <li>Office Number: ${manager.officeNumber}</li>
      </ul>
  </div>
</article>`;
  };

  const createEngineer = (engineer) => {
    return `
     <article class="cardTemp">
        <div class="cardHeader cardHeaderEngineer">
          <h2>Name: ${engineer.name}</h2>
        </div>
        <div class="cardBody">
          <h3>Role: ${engineer.getRole()}<span></span> <i class="fas fa-wrench"></i></h3>
            <ul>
              <li>Email: ${engineer.email}</li>
              <li>ID: ${engineer.id}</li>
              <a href="https://github.com/${
                engineer.github
              }" target="_blank"><li>Github: ${engineer.github}</li></a>
            </ul>
        </div>
      </article>`;
  };

  const createIntern = (intern) => {
    return `
    <article class="cardTemp">
    <div class="cardHeader cardHeaderIntern">
      <h2>Name: ${intern.name}</h2>
    </div>
    <div class="cardBody">
      <h3>Role: ${intern.getRole()}<span></span> <i class="fas fa-book"></i></h3>
        <ul>
          <li>Email: ${intern.email}</li>
          <li>ID: ${intern.id}</li>
          <li>School: ${intern.school}</li>
        </ul>
    </div>
  </article>`;
  };

  teamCards.push(
    profiles
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );

  teamCards.push(
    profiles
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
  );

  teamCards.push(
    profiles
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createIntern(intern))
  );

  return teamCards.join("");
};

module.exports = (profiles) => {
  return `

           
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="index.css" />
      <title>Team Profile Generator</title>
    </head>
    <body>
      <header class="header">
        <h1>My Team</h1>
      </header>
  
      <main>
        <section class="card-holder">
        ${masterTeam(profiles)}
        </section>
      </main>
      <script src="https://kit.fontawesome.com/4a305bf03e.js" crossorigin="anonymous"></script>
    </body>
  </html>`;
};
