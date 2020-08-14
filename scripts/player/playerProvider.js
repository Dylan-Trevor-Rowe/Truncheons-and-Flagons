let players = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const playerStateChange = new CustomEvent("playerStateChanged")
    eventHub.dispatchEvent(playerStateChange)
}

export const usePlayers = () => {
    return teams.slice()
}

export const getPlayers = () => {
    return fetch("http://localhost:3000/players")
        .then(response => response.json())
        .then(parsedPlayers => {
            players = parsedPlayers
        })
}



export const savePlayer = (player) => {
    return fetch("http://localhost:3000/players", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(player)
    })
    .then(getPlayers)
    .then(dispatchStateChangeEvent)
}