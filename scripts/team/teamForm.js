import {saveTeam, useTeams } from "./teamProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".createTeam")

eventHub.addEventListener("click", clickEvent => {
    

    if(clickEvent.target.id === "createTeam") {
        const teamName = document.querySelector("#teamName")

        const teams = useTeams()
        let doesTeamExist = false
        teams.forEach(team => {
            if (team.name.toLowerCase() === teamName.value.toLowerCase()){
                doesTeamExist = true
            }
        })

        if(teamName.value){

            if (!doesTeamExist){

                const newTeam = {
                    name : teamName.value,
                    totalScore : 0,
                    
                }
                saveTeam(newTeam)
                render()
            }else{
                window.alert("team name taken")
            }
            
        
        }else{
            window.alert("Please provide a team name")
        }

    }
})

const render = () => {
    contentTarget.innerHTML = `
        <h3>Create A New Team</h3>
        <div name="teamCreationForm id="teamCreation>
            <input type="text" id="teamName" placeholder="Team Name" />
            <button id="createTeam">Create Team</button>
        </div>
    `
}

export const TeamForm = () => {
    render()
        
}


