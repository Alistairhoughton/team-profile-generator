const masterTeam = (profiles) => {

    teamCards = []

    const createManager = (manager) => {
        return`
        <div>

        ${manager.getName}
        


        <div>
        <div>

        ${manager.getOfficeNumber()}
        


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