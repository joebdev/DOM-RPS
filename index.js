const body = document.querySelector('body')
const containerDiv = document.createElement('div')
const rock = document.createElement('button')
const paper = document.createElement('button')
const scissors = document.createElement('button')
const buttonContainer = document.createElement('div')
let playerScore = document.createElement('h1')
let computerScore = document.createElement('h1')
let gameAnswer = document.createElement('p')
let gameWinner = document.createElement('p')
let resetButton = document.createElement('button')


let playerChoice = ''
let keepPlayerPoints = 0
let keepComputerPoints = 0


body.appendChild(containerDiv)
containerDiv.append(buttonContainer, playerScore, computerScore, gameAnswer, gameWinner)
buttonContainer.append(rock, paper, scissors)

rock.textContent = 'Rock'
paper.textContent = 'Paper'
scissors.textContent = 'Scissors'
playerScore.textContent = `Player Score: ${keepPlayerPoints}`
computerScore.textContent = `Computer Score: ${keepComputerPoints}`

containerDiv.classList.add('containerDiv')
buttonContainer.classList.add('buttonContainer')
gameWinner.classList.add('gameWinner')
resetButton.classList.add('resetButton')


rock.addEventListener('click', (e) => {
    playerChoice = 'rock'
    playGame()
})

paper.addEventListener('click', (e) => {
    playerChoice = 'paper'
    playGame()
})

scissors.addEventListener('click', (e) => {
    playerChoice = 'scissors'
    playGame()
})

resetButton.addEventListener('click', () => {
    location.reload()
})

function getComputerChoice() {
    const computerChoicesArr = ['rock', 'paper', 'scissors']
    let getRandomNumber = Math.floor(Math.random() * 3)
    let computerChoice = computerChoicesArr[getRandomNumber]
    return computerChoice
}


function handleGameChoices() {
    let computerChoice = getComputerChoice()

    if (playerChoice == computerChoice) {
        gameAnswer.textContent = `It was a tie! You both chose ${playerChoice}`
        return
    }

    switch (playerChoice) {
        case 'rock':
            if (computerChoice == 'scissors') {
                gameAnswer.textContent = `You win! Computer chose scissors!`
                return true
            } else if (computerChoice == 'paper') {
                gameAnswer.textContent = `You lose! Computer chose paper!`
                return false
            }
        break;

        case 'paper':
            if (computerChoice == 'rock') {
                gameAnswer.textContent = `You win! Computer chose rock!`
                return true
            } else if (computerChoice == 'scissors') {
                gameAnswer.textContent = `You lose! Computer chose scissors!`
                return false
            }
        break;

        case 'scissors':
            if (computerChoice == 'paper') {
                console.log('You win! Computer chose paper!')
                gameAnswer.textContent = `You win! Computer chose paper!`
                return true
            } else if (computerChoice == 'rock') {
                gameAnswer.textContent = `You lose! Computer chose rock!`
                return false
            }
        break;

        default:
            console.log("Invalid choice. Please pick 'rock', 'paper', or 'scissors'.")
    }

}


function playGame() {
    const result = handleGameChoices()
    if (result === true) {
        playerScore.innerText = `Player Score: ${++keepPlayerPoints}`
    } else if (result === false) {
        computerScore.innerText = `Computer Score: ${++keepComputerPoints}`
    }

    if (keepPlayerPoints == 5) {
        gameWinner.textContent = 'Congrats! You won the game!'
        containerDiv.appendChild(resetButton)
        resetButton.textContent = 'Reset Game'
    } else if (keepComputerPoints == 5) {
        gameWinner.textContent = 'Darn! You lost, better luck next time!'
        resetButton.textContent = 'Reset Game'
        containerDiv.appendChild(resetButton)
    }
}
