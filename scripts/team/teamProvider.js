let teams = []

const eventHub = document.querySelector(".container")

const dispatchTeamChange = () => {
    const teamStateChange = new CustomEvent("teamStateChanged")
    eventHub.dispatchEvent(teamStateChange)
}

export const useTeams = () => {
    return teams.slice()
}

export const getTeams = () => {
    return fetch("http://localhost:3000/teams")
        .then(response => response.json())
        .then(parsedTeams => {
            teams = parsedTeams
        })
}



export const saveTeam = (team) => {
    const JTeam = JSON.stringify(team)
    return fetch("http://localhost:3000/teams", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JTeam
    })
    .then(getTeams)
    .then(dispatchTeamChange)
}