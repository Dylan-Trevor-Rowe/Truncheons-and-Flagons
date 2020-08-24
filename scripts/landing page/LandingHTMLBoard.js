export const LandingLeader = (teamObj) => {
    return `
        <tr>
            <th scope="row">${teamObj.name}</th>
                <td>${teamObj.totalScore}</td>
                
        </tr>
    `
}