import { TeamForm } from "../team/teamForm.js";
import { playerForm } from "../player/createPlayerForm.js";
import { LeaderBoard } from "../Leaderboard/Leaderboard.js";
const eventHub=document.querySelector(".container")


eventHub.addEventListener("landingPageStart", () => {
   
           TeamForm()
           playerForm()
           LeaderBoard()
           
       

})
