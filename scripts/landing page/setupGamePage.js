import { TeamForm } from "../Forms/teamForm.js";
import { playerForm } from "../player/createPlayerForm.js";
const eventHub=document.querySelector(".container")


eventHub.addEventListener("landingPageStart", () => {
   
           TeamForm()
           playerForm()
           
       

})
