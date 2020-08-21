import { getTeams, useTeams } from "./teamProvider.js";
import { teamsPlayingSelects } from "./choosingTeams.js";

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.setupGameBottom')

export const teamSelectsRender = (teamArr) => {
    contentTarget.innerHTML +=  teamsPlayingSelects(teamArr)
    };
   




eventHub.addEventListener('teamSelected', (teamSelectedEvent) => {


    const teamThatWasSelected = teamSelectedEvent.detail.teamId

    const arrayOfTeams = useTeams();
    const foundTeamObject = arrayOfTeams.find((team) => {
        return parseInt(teamThatWasSelected) === team.id
      

    })
    console.log(foundTeamObject)
    teamSelectsRender(foundTeamObject)
 
})
export const teamsList = () => {

    getTeams()
        .then(() => {
            const teams = useTeams()
            teamSelectsRender(teams)


        })
}
