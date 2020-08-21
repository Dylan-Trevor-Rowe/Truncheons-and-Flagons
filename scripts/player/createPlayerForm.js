
import { getPlayers, usePlayers, savePlayer } from "./playerProvider.js"
import { getTeams, useTeams } from "../team/teamProvider.js"

const contentTarget = document.querySelector(".createPlayer")
const eventHub = document.querySelector(".container")

let teamsAvailable = 0
let teams = useTeams()
let players = usePlayers()

eventHub.addEventListener("teamStateChanged", () => {
    teams = useTeams()
    findTeamsWithLessThanThreePlayers(players, teams)

})

eventHub.addEventListener("playerStateChanged", () => {
    players= usePlayers()
    findTeamsWithLessThanThreePlayers(players, teams)
})

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "savePlayer") {
            const name = document.querySelector("#playerForm--name")
            const country = document.querySelector("#playerForm--country")
            const team = document.querySelector("#playerForm--team")
            
            
            if (name.value && country.value && team.value){
                const newPlayer = {
                    name: name.value,
                    country: country.value,
                    teamId: parseInt(team.value)
                }
                savePlayer(newPlayer)
                findTeamsWithLessThanThreePlayers()
            }else{
                window.alert("Please fill in all fields")
            }
        }
    })




const render = (teamArr) => {
   
    contentTarget.innerHTML = `
    <h3>Create A New Player</h3>
    <input type="text" id="playerForm--name" placeholder="player name">
    <input type="text" id="playerForm--country" placeholder="country">
    <select id="playerForm--team" class="criminalSelect">
    <option value="0">Please assign a team...</option>
    ${
        teamArr.map(team => {
            return `<option value="${team.id}">${ team.name}</option>`
        }).join('')
    }
    </select>
    <button id="savePlayer">Assign to team</button>
    <p>${renderTeamsAvailable()}</p>`
    
    
    
}

const findTeamsWithLessThanThreePlayers = () => {
    const foundTeams = teams.filter(team => {
        const playersInTeam = players.filter(player => player.teamId === team.id)
        if (playersInTeam.length < 3) {
            return team
        }
    })
    teamsAvailable = foundTeams.length
    render(foundTeams)
   
}

const renderTeamsAvailable = () => {
   if (teamsAvailable === 0){
       return `All teams are full or none have been created please create a new team first`
   }else{        
       return ''    
    }
 }

export const playerForm = () => {
    getTeams()
    .then(getPlayers)
    .then(() => {
        teams = useTeams()
        players= usePlayers()
        findTeamsWithLessThanThreePlayers()
    })
}