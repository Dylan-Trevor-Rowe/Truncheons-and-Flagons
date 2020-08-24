let teams = []

const eventHub = document.querySelector(".container")

const dispatchTeamChange = () => {
    const teamStateChange = new CustomEvent("teamStateChanged")
    eventHub.dispatchEvent(teamStateChange)
}

export const useTeams = () => {
    const sortedByScore = teams.sort(
        (a,b) =>{
            return b.totalScore - a.totalScore
        }
        
    )
    return sortedByScore.slice()
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
export const updateTotalScore = (teamObject) => {
    return fetch(`http://localhost:3000/teams/${teamObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(teamObject)
    })
    .then(getTeams)
    .then(dispatchTeamChange)

}