import { getTeams, useTeams } from "../team/teamProvider.js"

const eventHub = document.querySelector(".container")

const scores = []

export const getScores = () => {
    getTeams()
    .then(() => {
        const teams = useTeams()
        const scoresArr = teams.map(team => {
            return {totalScore: team.totalScore, teamName: team.name}
        })
        scores = scoresArr
    })
}

export const useScores = () => {
    return scores.slice()
}