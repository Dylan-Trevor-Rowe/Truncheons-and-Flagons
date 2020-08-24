import { getTeams, useTeams } from "./teamProvider.js";
import { teamConverter } from "./team.js";
import { roundScore } from "../score/scoreForm.js";



const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.selectedTeams')
const contentTargetTwo = document.querySelector('.selectedTeamsGame')




export const clickMe = () => {
    eventHub.addEventListener('click', (event) => {

        const teamchangesTwo = document.querySelector('.selectTwo')
        const teamchangesThree = document.querySelector('.selectThree')
        const teamChanges = document.querySelector('.selectOne')
        const parsedTeams = parseInt(teamChanges.value)
        const parsedTeamsTwo = parseInt(teamchangesTwo.value)
        const parsedTeamsThree = parseInt(teamchangesThree.value)


        
    if ( event.target.id === "teamButton" && parsedTeams !== 0 && parsedTeamsTwo !== 0 && parsedTeamsThree !== 0 ) {

    
        const arrayOfTeams = useTeams();
        const foundTeamObject = arrayOfTeams.find((teams) => {
          return parsedTeams  === teams.id

        })
    
        const foundTeamObjectTwo = arrayOfTeams.find((teams) => {
         return   parsedTeamsTwo  === teams.id
            })
  
        const foundTeamObjectThree = arrayOfTeams.find((teams) => {
         return   parsedTeamsThree  === teams.id
         })
         
       
      const arrayOfVal = [foundTeamObject, foundTeamObjectTwo, foundTeamObjectThree]
      
      let duplicates = false
      arrayOfVal.forEach(value => {
          const numberOfInstances = arrayOfVal.filter(v => value === v)
          if(numberOfInstances.length > 1){
              duplicates = true
            }
        })
        
        if(duplicates){
            window.alert("please choose three different teams to play")
            
      }else{

          render(arrayOfVal)
   
         const arrayOfValues = new CustomEvent('arrayOfValues', {
              detail: {
               arrayOfVal: arrayOfVal
              }
   
          })
          dispatchEvent(arrayOfValues)

      }
    }
    })
}

export const render = (Arr) => {
contentTarget.innerHTML = teamConverter(Arr) 
contentTargetTwo.innerHTML = roundScore(1)
    
}


export const teamsList = () => {

    getTeams()
        .then(() => {
            const teams = useTeams()
            render(teams)   
        })
}



