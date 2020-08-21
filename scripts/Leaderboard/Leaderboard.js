import {getTeams, useTeams} from "../team/teamProvider.js"
import {getPlayers, usePlayers } from "../player/playerProvider.js"
import {LeaderBoardHTML} from "./LeaderBoardHTMLCon.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".mainLeaderBoard")



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

// const render = () => {
//     contentTarget.innerHTML = players.map(
//         player => {
//             const matchedTeam = teams.find(team => team.id === player.teamId)
//             const html = LeaderBoardHTML(matchedTeam, player)
//             return html
//         }
//     ).join("")
// }

const render = () => {
    contentTarget.innerHTML = teams.map(team => 
        `${
            LeaderBoardHTML(team)
        }`
        ).join("")
}
//