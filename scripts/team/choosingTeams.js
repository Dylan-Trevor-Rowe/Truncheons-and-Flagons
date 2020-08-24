import { getTeams, useTeams } from "./teamProvider.js";
import { getPlayers, usePlayers } from "../player/playerProvider.js";

const eventHub = document.querySelector(".container")

const contentTargetTwo = document.querySelector('.teamSelection')
let teams = []
let players = []

eventHub.addEventListener("teamStateChanged", () => {
    teams = useTeams()
    teamsWithPlayers()
    teamsPlayingSelects()
})

eventHub.addEventListener("playerStateChanged", () => {
    teamsPlayingSelects()
})


export const teamList = () => {
    getTeams()
    .then(getPlayers)
        .then(() => {
           players = usePlayers()
           teams = useTeams()
           teamsWithPlayers()
            teamsPlayingSelects()
           
        })
}

const teamsWithPlayers = () => {
    teams = teams.filter(team => {
        let correspondingPlayers = players.filter(player => player.teamId === team.id)
        if (correspondingPlayers.length === 3){
            return team
        }

    })
}

export const teamsPlayingSelects = () => {
<<<<<<< HEAD
    contentTargetTwo.innerHTML = `
<select id="unoSelect" placeholder="select a team" class="selectOne">
<option value="0">choose a team</option>
=======
    
    contentTargetTwo.innerHTML = 
    
    `
<select id="unoSelect" class="selectOne">
<option value="0"></option>
>>>>>>> master
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

