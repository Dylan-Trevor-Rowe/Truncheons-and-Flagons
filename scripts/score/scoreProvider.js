import { getTeams, useTeams } from "../team/teamProvider.js"

const eventHub = document.querySelector(".container")

export const getScores = () => {
    getTeams()
    .then(() => {
        const teams = useTeams()
        const scores = teams.map(team => {
            return {totalScore: team.totalScore, teamName: team.name}
        })
        return scores
    })
}