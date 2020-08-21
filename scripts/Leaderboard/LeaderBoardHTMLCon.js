export const LeaderBoardHTML = (team) => {
    return `
        <div class="teamName">Name: ${team.name}</div>
        <div class="teamScore">Total Score: ${team.totalScore}</div>
        <div class="totalPlayer">Players: ${team.playerCount}</div>
        
        
        
            
    `
}

//<div class="totalPlayers">${players.total}</div>