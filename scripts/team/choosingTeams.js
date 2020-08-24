import { getTeams, useTeams } from "./teamProvider.js";

const eventHub = document.querySelector(".container")

const contentTargetTwo = document.querySelector('.teamSelection')
let teams = []

eventHub.addEventListener("teamStateChanged", () => {
    teams = useTeams()
    teamsPlayingSelects()
})

eventHub.addEventListener("playerStateChanged", () => {
    teamsPlayingSelects()
})


export const teamList = () => {
    getTeams()
        .then(() => {
           teams = useTeams()
            teamsPlayingSelects()
           
        })
}

export const teamsPlayingSelects = () => {
    contentTargetTwo.innerHTML = `
<select id="unoSelect" placeholder="select a team" class="selectOne">
<option value="0">choose a team</option>
${
      teams.map(team => {
            return `<option value="${team.id}"> ${team.name}</option>`;
        }).join('')
        }    
</select >

 <select id="dosSelect"  class='selectTwo'>
 <option value="0">choose a team</option>
 ${
    teams.map(team => {
            return `<option value="${team.id}"> ${team.name}</option>`;
        }).join('')
        }    
</select>

<select id="tresSelect"  class='selectThree'>
<option value="0">choose a team</option>
${
    teams.map(team => `<option value="${team.id}"> ${team.name}</option>`).join('')
        }    
</select>
<div>
<button id="teamButton">Teams Selected!</button>
</div>
`}

