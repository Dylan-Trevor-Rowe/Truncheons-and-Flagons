import {getTeams, useTeams} from "../team/teamProvider.js"
import {getPlayers, usePlayers } from "../player/playerProvider.js"
import {LeaderBoardHTML} from "./LeaderBoardHTMLCon.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".mainLeaderBoard")

eventHub.addEventListener("teamStateChanged", () => {
    LeaderBoard()
})

eventHub.addEventListener("playerStateChanged", () => {
    LeaderBoard()
})



let teams = []
let players = []

export const LeaderBoard = () => {
    getTeams()
        .then(getPlayers)
        .then(() => {
            teams = useTeams()
            players = usePlayers()

            render()
        })
}




const render = () => {
    const html = teams.map(
        team => {
            const thePlayers = players.filter(player => {
                return player.teamId === team.id
            })
                const playerCount = thePlayers.length
                team.playerCount = playerCount 
                //added to team object
                //gives the number of players in each
                //array to the populate on the dom
            
            const toDOM = LeaderBoardHTML(team)
            return toDOM
        }
    ).join("")
    contentTarget.innerHTML = html
}