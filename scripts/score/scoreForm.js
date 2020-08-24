import { updateTotalScore } from "../team/teamProvider.js"



export const roundScore = (round) => {
        return `
       <article class="roundNumber--${round}"
            <h3>Round ${round} Scores</h3>

            <input type="text" id="scoreOne" placeholder="Enter Team One Score" />
            <input type="text" id="scoreTwo" placeholder="Enter Team Two Score" />
            <input type="text" id="scoreThree" placeholder="Enter Team Three Score" />
            <button id="saveRoundScore">Record Round ${round}</button>
       </article>
    `
}
const currentGameScore = () => {
    return `
   <article class="currentGame"
        <h3>Game Score</h3>

        <div class="teamOne"> Team One Score: ${teamOneScore} </div>
        <div class="teamTwo"> Team Two Score: ${teamTwoScore} </div>
        <div class="teamThree"> Team Three Score: ${teamThreeScore} </div>
        <button id="startNewGame"> Start New Game </button>
        
   </article>
`
}

let currentRound= 1
let teamOneScore = 0
let teamTwoScore = 0
let teamThreeScore = 0

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".selectedTeamsGame")
const contentTargetTwo = document.querySelector(".selectedTeams")

eventHub,addEventListener('arrayOfValues', clickEvent => {
    const teamArray = clickEvent.detail.arrayOfVal
    teamOne = teamArray[0]
    teamTwo = teamArray[1]
    teamThree = teamArray[2]
})

let teamOne = {}
let teamTwo ={}
let teamThree ={}
eventHub.addEventListener("click", clickEvent => {
    

    if (clickEvent.target.id === "saveRoundScore") {
       const teamOneRoundScore = document.querySelector(`#scoreOne`).value
       const teamTwoRoundScore = document.querySelector(`#scoreTwo`).value
       const teamThreeRoundScore = document.querySelector(`#scoreThree`).value
       console.log(teamThreeRoundScore)
       const total = parseInt(teamOneRoundScore) + parseInt(teamTwoRoundScore) + parseInt(teamThreeRoundScore)
        if(total === 3) {
            teamOneScore += parseInt(teamOneRoundScore)
            teamTwoScore += parseInt(teamTwoRoundScore)
            teamThreeScore += parseInt(teamThreeRoundScore)
            currentRound += 1
            console.log(teamOneScore)
            if(currentRound < 4) {
            contentTarget.innerHTML = roundScore(currentRound)
            console.log(currentRound)
            }
            else {
                contentTarget.innerHTML = currentGameScore()
                teamOne.totalScore += teamOneScore
                teamTwo.totalScore += teamTwoScore
                teamThree.totalScore += teamThreeScore
                
                updateTotalScore(teamOne).then(() => {
                    updateTotalScore(teamTwo).then(() =>{ 
                        updateTotalScore(teamThree)

                    })

                })

                teamOneScore = 0
                teamTwoScore = 0
                teamThreeScore = 0
                currentRound = 1
            }
            
        }
        else {window.alert("Scores Must Total 3")}

    }
})

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "startNewGame") {
        contentTarget.innerHTML = ""
        contentTargetTwo.innerHTML = ""
        
    }
}
 )