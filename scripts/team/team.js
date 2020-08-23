export const teamConverter = (teamObjects) => {

    return `<article class='alibi__Container'>
            <div class='alibiClass'>team One: ${teamObjects[0].name}</div>
            <div class='alibiClass'>team Two: ${teamObjects[1].name}</div>
            <div>team Three: ${teamObjects[2].name}</div>
            </article>`
    
    }