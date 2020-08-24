export const recordedRound = (round) => {
    return`
       <article class="roundNumber--${round - 1}"
            <h3>Round ${round} Scores</h3>

            <div id="score--${teamObjects[0].id}" placeholder="" />
            <div id="score--${teamObjects[0].id}" placeholder="" />
            <div id="score--${teamObjects[0].id}" placeholder="" />
            <div id="score--${teamObjects[0].id}" placeholder="" />
       </article>
    `
}