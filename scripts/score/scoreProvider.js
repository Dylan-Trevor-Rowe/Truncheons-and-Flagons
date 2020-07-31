const eventHub = document.querySelector(".container")

let scores = []

const dispatchChangeEvent = () => {
    const scoreStateChangedEvent = new CustomEvent("scoreStateChanged")
    eventHub.dispatchEvent(scoreStateChangedEvent)
}

export const getScores = () => {
    return fetch('http://localhost:3000/teamScores')
        .then(response => response.json())
        .then(parsedScores => {
            scores = parsedScores
        })

}

export const saveScore = score => {
    return fetch('http://localhost:3000/teamScores', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(score)
    })
    .then(getScores)
    .then(dispatchChangeEvent)
}

export const useScores = () => {
    return scores.slice()
}