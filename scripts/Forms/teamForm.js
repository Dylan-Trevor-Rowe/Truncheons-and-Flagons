import {saveTeam } from "../team/teamProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".createTeam")

eventHub.addEventListener("click", clickEvent => {
    

    if(clickEvent.target.id === "createTeam") {
        const teamName = document.querySelector("#teamName")
        

        const newTeam = {
            name : teamName.value,
            teamScore : 0,
            
        }

        saveTeam(newTeam)
    }
})

const render = () => {
    contentTarget.innerHTML = `
        <h3>Create a New Team</h3>
        <form name="teamCreationForm id="teamCreation>
            <input type="text" id="teamName" placeholder="Team Name" />
            <button id="createTeam">Create Team</button>
        <form>
    `
}

export const TeamForm = () => {
    render()
        
}


// import { TeamForm } from "./Forms/teamForm.js"
// 
// TeamForm()