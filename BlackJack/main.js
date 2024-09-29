let playerStatus = {
    name: "Mika",
    chips: "69"
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEL = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el")
let cardEL = document.getElementById("card-el")

let playerEl = document.getElementById("player-el");
playerEl.textContent = `${playerStatus.name}: $${playerStatus.chips}`;

console.log(cards);
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    }else {
        return randomNumber;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    cardEL.textContent = `Cards: `
    for(let i =0; i < cards.length; i++){
        cardEL.textContent += cards[i] + " ";
    }
    sumEL.textContent = `Sum: ${sum}`;
    if(sum <= 20) {
        message= "Do you want to draw a new card?";
    }else if(sum === 21){
        message= "You've got the BlackJack!";
        hasBlackJack = true;
    }else{
        message = "You lost!";
        isAlive = false;
    }
    messageEL.textContent = message;
}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }
}
