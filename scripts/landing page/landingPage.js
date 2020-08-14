

const eventHub = document.querySelector('.container')

const contentTarget = document.querySelector('.landingPage');

export const landingButton = () => {
    contentTarget.innerHTML = 
    `<button id="landingButton"class="landingButton">Truncheons and Flagons</button>`
}   

export const leaveThePage = () => { 
eventHub.addEventListener('click', e => {
    if (e.target.id === 'landingButton') {
     console.log('it works') 
        
        contentTarget.remove()

        const LandingPageStart = new CustomEvent('landingPageStart', {
           
        })
        eventHub.dispatchEvent(LandingPageStart);
   } 
})
}
