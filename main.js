const racersElement = document.getElementById('racers')
const featuredRacerElement = document.getElementById('featuredRacer')

fetch('./F1racer3.json')
    .then((response) => response.json())
    .then((data) =>{
        for(const racer of data) {
            addRacer(racer.position, racer.points, racer.wins, racer.Driver)
        }
    })


    

let racers = []

function addRacer(position, points, wins, Driver) {
    const racerElement = document.createElement('div')
    racerElement.classList.add('card','mb-3')

    racerElement.innerHTML=`
        <div class ="card-body">
 
            <h1>${Driver.driverId}</h1>
            <h1>${position}</h1>
            <h3>${points}</h3>
            <h4>${wins}</h4>
        </div>
    `

    racerElement.addEventListener('click', (event) => {
        let driverHTML =''

        for(const driverId in Driver) {
            console.log(driverId, Driver[driverId])
            driverHTML += `
                <li class = "list-group-item">
                    <strong>${driverId}:</strong> ${Driver[driverId]}
                </li>
            `


        }

        featuredRacerElement.innerHTML = `
            <div class='card'>
                <div class ="card-header">
                    <h2>${position}</h2>
                    <p class ='mb-0'>${points}</p>
                    <p class ='mb-0'>${wins}</p>
                </div>
                <ul class = "list-group list-group-flush">
                    ${driverHTML}

                </ul>
            </div>
        
        
        `

    })


    racersElement.appendChild(racerElement)
}

// addRacer('Shawn','5','1')