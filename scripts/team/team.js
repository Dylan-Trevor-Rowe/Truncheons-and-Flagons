export const teamConverter = (teamObjects) => {

    return `<article class='team__Container'>
            <div>team One: ${teamObjects[0].name}</div>
            <div>team Two: ${teamObjects[1].name}</div>
            <div>team Three: ${teamObjects[2].name}</div>
            </article>`
    
    }