let weapon = {
    rock: {
        beats: 'scissors'
    },
    paper: {
        beats: 'rock'
    },
    scissors: {
        beats: 'paper'
    }
}



function play(playerChoice) {
    let player = playerChoice.weapon
    let compChoice = choices[randIndex]
    if (player == compChoice) {
        document.getElementById('outcome').innerText = "It's a draw.." 
    }  
}



function random() {
    let choices = Object.keys(weapon)
    let randIndex = Math.floor(Math.random() * (choices.length))
    return choices[randIndex]
}
