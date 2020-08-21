import { getTeams, useTeams } from "./teamProvider.js";

const eventHub = document.querySelector(".container")


eventHub.addEventListener("teamStateChanged", () => {
    const teams = useTeams()
    teamsPlayingSelectsOne(teams)
})





eventHub.addEventListener('click', (event) => {
    const teamChanges = document.querySelector('.selectOne')
    const teamchangesTwo = document.querySelector('.selectTwo')
    const teamchangesThree = document.querySelector('.selectThree')

    const parsedTeams = parseInt(teamChanges.value)
    const parsedTeamsTwo = parseInt(teamchangesTwo.value)
    const parsedTeamsThree = parseInt(teamchangesThree.value)

    if ( parsedTeams !== 0 && parsedTeamsTwo.value !== 0 && parsedTeamsThree.value !== 0 && event.target.id === "teamButton" ) {
        console.log('this also works')
        const customEvent = new CustomEvent("teamSelectedTwo", {
            detail: {
                teamOne: 'name',
                teamtwo: 'name',
                teamThree: 'name'
            }
        })

        eventHub.dispatchEvent(customEvent)
    } 


})



eventHub.addEventListener('change', (changeEvent) => {

    

    if (changeEvent.target.id === 'unoSelect' || 'dosSelect' || 'tresSelect') {
console.log('it works')

        const customEvent = new CustomEvent("teamSelected", {
            detail: {
                teamId: changeEvent.target.value
            }
        })

        eventHub.dispatchEvent(customEvent)
    }

}
)




export const teamList = () => {
    getTeams()
        .then(() => {
            const allteams = useTeams()
            teamsPlayingSelects(allteams)
        })
}



export const teamsPlayingSelects = (teams) => {
    return `
<select id="unoSelect" class="selectOne">
<option value="0"></option>
${
        teams.map(teams => {
            return `<option value="${teams.id}"> ${teams.name}</option>`;
        }).join('')
        }    
</select >

 <select id="dosSelect" class='selectTwo'>
 <option value="0"></option>
 ${
        teams.map(teams => {
            return `<option value="${teams.id}"> ${teams.name}</option>`;
        }).join('')
        }    
</select>

<select id="tresSelect" class='selectThree'>
<option value="0"></option>
${
        teams.map(teams => `<option value="${teams.id}"> ${teams.name}</option>`).join('')
        }    
</select>
<div>
<button id="teamButton">Teams Selected!</button>
</div>
`}

