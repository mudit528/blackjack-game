let cardEl = document.getElementById ("card-el")
let sumEl = document.getElementById ("sum-el")
let msgEl = document.getElementById ("msg-el")
let sum = 0
let isAlive = false
let rec = []



function randomCard() {
    let v = Math.floor(Math.random()*13) + 1 // generates random number bw 1-13
    console.log(v)
    if (v>11){
        return 11
    }
    else if (v === 1) {
        return 11
    }
    else {
        return v
    }
    
}


function startGame() {

    if (rec.length && isAlive) {
        msgs = "You are in the game! Want to draw a new card?"
        msgEl.textContent = msgs
    }
    else {
        sum = 0
        rec = []
        isAlive = true
        // pull out two cards
        let fCard = randomCard()
        let sCard = randomCard()
        // show at table
        rec = [fCard, sCard]
        cardEl.textContent = "Cards: " + fCard + " " + sCard + " "
        // sum the value
        sum = fCard + sCard
        sumEl.textContent = "Sum: " + sum
        // define the next move
        nextMove()
    }
}

function nextMove() {
    // if <21 ask if want to draw another card
    let msgs = ""
    if (sum<21) {
        msgs = "Want to draw another card?"
    }
    // else if =21 print result
    else if (sum === 21) {
        msgs = "You got Blackjack!"
        isAlive = false
    }
    // else game over
    else {
        msgs = "Game Over!"
        isAlive = false
    }
    msgEl.textContent = msgs
}

function newCard() {
    
    if (!isAlive) {
        msgs = "Click START GAME to play again!"
        msgEl.textContent = msgs
    }
    else {
        // generate a new card
        let newC = randomCard()
        // push in the array and the display
        rec.push(newC)
        cardEl.textContent += newC + " "
        // find new sum and display it
        sum += newC
        sumEl.textContent = "Sum: " + sum
        // check for next move
        nextMove()
    }
}