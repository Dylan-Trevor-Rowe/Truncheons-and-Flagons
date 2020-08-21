


const eventHub = document.querySelector('.container')

const contentTarget = document.querySelector('.landingPage');

export const landingButton = () => {
    contentTarget.innerHTML+=
    
        `<div>
        <button id="landingButton"class="landingButton">Truncheons & Flagons</button>
        <image id="truncheon" src="scripts/images/truncheons and flags.png">
        </div>
        
        `
        
        
        
}

export const leaveThePage = () => {
    eventHub.addEventListener('click', e => {
        if (e.target.id === 'landingButton') {
           

            contentTarget.remove()

            const LandingPageStart = new CustomEvent('landingPageStart', {

            })
            eventHub.dispatchEvent(LandingPageStart);
        }
    })
}
