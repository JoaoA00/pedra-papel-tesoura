let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let number = Math.random() * 10;
    let choice;

    if (number < 4) {
        choice = 'papel';
    } else if (number < 7) {
        choice = 'pedra';
    } else {
        choice = 'tesoura';
    }

    return choice;
}

function getHumanChoice(){
    let choice = prompt('Pedra, Papel ou Tesoura?').toLowerCase();
    
    if (choice == 'pedra' || choice == 'papel' || choice == 'tesoura') {
        return choice;
    } else { return 'opção inválida' }

}

function playRound(humanChoice, computerChoice){

    if (humanChoice == computerChoice) {
        console.log('Empate! Os os dois colocaram ' + humanChoice);
    } else if (humanChoice == 'pedra') {
        if (computerChoice == 'tesoura') {
            console.log('Você venceu! Pedra quebra a Tesoura');
            humanScore++;
            console.log(humanScore + ' x ' + computerScore);
        } else {
            //sobrou o papel
            console.log('Você perdeu! Papel embrulha Pedra');
            computerScore++;
            console.log(humanScore + ' x ' + computerScore);
        }
    } else if (humanChoice == 'papel') {
        if (computerChoice == 'tesoura') {
            console.log('Você perdeu! Tesoura corta o Papel');
            computerScore++;
            console.log(humanScore + ' x ' + computerScore);
        } else {
            //sobrou a pedra
            console.log('Você venceu! Papel embrulha Pedra');
            humanScore++;
            console.log(humanScore + ' x ' + computerScore);
        }
    } else { //tesoura
        if (computerChoice == 'papel') {
            console.log('Você venceu! Tesoura corta o Papel');
            humanScore++;
            console.log(humanScore + ' x ' + computerScore);
        } else {
            //sobrou a pedra
            console.log('Você perdeu! Pedra quebra a Tesoura');
            computerScore++;
            console.log(humanScore + ' x ' + computerScore);
        }
    }

}

function playGame() {
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame();