import { TeamForm } from "../team/teamForm.js";
import { playerForm } from "../player/createPlayerForm.js";
import { LeaderBoard } from "../Leaderboard/Leaderboard.js";

import "../Leaderboard/Leaderboard.js"
import { clickMe } from "../team/teamList.js"
import {   teamList } from '../team/choosingTeams.js'
const eventHub = document.querySelector(".container")

eventHub.addEventListener("landingPageStart", () => {
   
           TeamForm()
           playerForm()
           LeaderBoard()
           teamList()
            clickMe()
           
       

})
