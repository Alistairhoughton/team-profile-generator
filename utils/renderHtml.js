const internal = require("stream");
const Engineer = require("../lib/Engineer");

const masterTeam = (profiles) => {

    teamCards = []

    const createManager = (manager) => {
        return`
        <div>

        ${manager.name}
        ${manager.id}
        ${manager.email}
        ${manager.officeNumber}
        
       
        <div>
         `;
    }

    const createEngineer = (engineer) => {
        return`
        <div>

        ${engineer.name}
        ${engineer.id}
        ${engineer.email}
        ${engineer.github}
        
       
        <div>
         `;
    }

    const createIntern = (intern) => {
        return`
        <div>

        ${intern.name}
        ${intern.id}
        ${intern.email}
        ${intern.school}
        
       
        <div>
         `;
    }
    
    

    teamCards.push(
        profiles
        .filter((employee) => employee.getRole() === 'Manager')
        .map((manager) => createManager(manager))
    )

    teamCards.push(
        profiles
        .filter((employee) => employee.getRole() === 'Engineer')
        .map((engineer) => createEngineer(engineer))
    )

    teamCards.push(
        profiles
        .filter((employee) => employee.getRole() === 'Intern')
        .map((intern) => createIntern(intern))
    )
    

    return teamCards.join('')

}

module.exports = (profiles) => {

    return`

            //html will go inside here


            <div>
    ${masterTeam(profiles)}
            </div>
    
    
    
    `

}