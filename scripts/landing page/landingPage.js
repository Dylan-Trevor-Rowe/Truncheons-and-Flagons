
import {getTeams, useTeams} from "../team/teamProvider.js"
import {LandingLeader} from "./LandingHTMLBoard.js"

const eventHub = document.querySelector('.container')

const contentTarget = document.querySelector('.landingPage');
const landingLeaderTarget = document.querySelector(".landingLeaderBoard")
const landingContainer = document.querySelector(".landingContainer")
export const landingButton = () => {
    contentTarget.innerHTML+=
    
        `<div>
        <button id="landingButton"class="landingButton">Truncheons & Flagons</button>
        <image id="truncheon" src="scripts/images/truncheons and flags.png">
        </div>
        
        `
        
        
        
}

export const leaveThePage = () => {
    eventHub.addEventListener('click', e => {
        if (e.target.id === 'landingButton') {
           
            landingContainer.remove()
            // contentTarget.remove()
            // landingLeaderTarget.remove()

            const LandingPageStart = new CustomEvent('landingPageStart', {

            })
            eventHub.dispatchEvent(LandingPageStart);
        }
    })
}

let teams = []
export const ShowLeaderBoardonLanding = () => {
    getTeams()
        .then(() => {
        teams = useTeams()
        
        render()
        })
}


const render = () => {
    let teamsHTML = ""
    teams.forEach(
        team => {
            teamsHTML += LandingLeader(team)
        }
    )

    landingLeaderTarget.innerHTML = `
        <h3>High Scores</h3>
        <div class="leaderBoardTable">
        <table class="table">
            <thead>
                <tr>
                    <th scope='col'>Team Name</th>
                    <th scpoe='col'>Total Score</th>
                    
                </tr>
            </thead>
            <tbody>
            ${teamsHTML}
            </tbody>
        </table>
        </div>
        `
}
