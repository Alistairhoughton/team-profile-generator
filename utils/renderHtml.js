const Engineer = require("../lib/Engineer");

const masterTeam = (profiles) => {

    teamCards = []

    const createManager = (manager) => {
        return`
        <div>

        ${manager.getName}
        ${manager.getId}
        ${manager.getEmail}
        ${manager.getOfficeNumber}
        
       
        <div>
        <div>

        ${Engineer.name}
        


        <div>
        <div>

        ${Engineer.name}
        


        <div>
        
        `;
    }

    teamCards.push(
        profiles
        .filter((employee) => employee.getRole() === 'Manager')
        .map((manager) => createManager(manager) )
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