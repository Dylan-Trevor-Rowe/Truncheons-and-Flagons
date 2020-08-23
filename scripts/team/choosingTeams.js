import { getTeams, useTeams } from "./teamProvider.js";
import { teamConverter } from './team.js'


const eventHub = document.querySelector(".container")

const contentTargetTwo = document.querySelector('.teamSelection')

eventHub.addEventListener("teamStateChanged", () => {
    teamsPlayingSelectsOne(teams)
})

eventHub.addEventListener("playerStateChanged", () => {
    teamsPlayingSelectsOne(teams)
})






// eventHub.addEventListener('change', (changeEvent) => {

    

//     if (changeEvent.target.id === 'unoSelect' || 'dosSelect' || 'tresSelect') {


//         const customEvent = new CustomEvent("teamSelected", {
//             detail: {
//                 teamId: changeEvent.target.value
//             }
//         })
    
//         eventHub.dispatchEvent(customEvent)
        
//     }

// }
// )




export const teamList = () => {
    getTeams()
        .then(() => {
            const allteams = useTeams()
            teamsPlayingSelects(allteams)
           
        })
}







export const teamsPlayingSelects = (teamNames) => {
    contentTargetTwo.innerHTML = `
<select id="unoSelect" class="selectOne">
<option value="0"></option>
${
      teamNames.map(teams => {
            return `<option value="${teams.id}"> ${teams.name}</option>`;
        }).join('')
        }    
</select >

 <select id="dosSelect" class='selectTwo'>
 <option value="0"></option>
 ${
    teamNames.map(teams => {
            return `<option value="${teams.id}"> ${teams.name}</option>`;
        }).join('')
        }    
</select>

<select id="tresSelect" class='selectThree'>
<option value="0"></option>
${
    teamNames.map(teams => `<option value="${teams.id}"> ${teams.name}</option>`).join('')
        }    
</select>
<div>
<button id="teamButton">Teams Selected!</button>
</div>
`}

