
const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.landingPage')


export const landingButton = () => {
    contentTarget.innerHTML += 
    `<button id="landingButton"class='landingButton'></button>`
}

eventHub.addEventListener('click',event => {
    if (event.target.id === 'landingButton') {
        contentTarget.innerHTML === '';
   } 
})



// add function thar renders new part of page 