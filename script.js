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

        return ['Empate! Os os dois colocaram ' + humanChoice, 'empatou'];

    } else if (humanChoice == 'pedra') {

        if (computerChoice == 'tesoura') {

            return ['Você venceu! Pedra quebra a Tesoura', 'venceu'];
            
        } else {
            //sobrou o papel
            return ['Você perdeu! Papel embrulha Pedra', 'perdeu'];
            
        }

    } else if (humanChoice == 'papel') {

        if (computerChoice == 'tesoura') {

            return ['Você perdeu! Tesoura corta o Papel', 'perdeu'];
            
        } else {
            //sobrou a pedra
            return ['Você venceu! Papel embrulha Pedra', 'venceu'];
            
        }

    } else { //tesoura
        
        if (computerChoice == 'papel') {

            return ['Você venceu! Tesoura corta o Papel', 'venceu'];
            
        } else {
            //sobrou a pedra
            return ['Você perdeu! Pedra quebra a Tesoura', 'perdeu'];
            
        }
    }

}

function attScore(resultado) {
    const scoreHuman = document.getElementById('human');
    const scoreComputer = document.getElementById('computer');


    switch (resultado) {
        case 'venceu':
            humanScore++;
            scoreHuman.textContent = humanScore;
            break;
        case 'perdeu':
            computerScore++;
            scoreComputer.textContent = computerScore;
            break;
    
        default:
            break;
    }

    if(humanScore == 5){
        alert("Você venceu!");
        resetScore();
    } else if (computerScore == 5){
        alert("Você perdeu!");
        resetScore();
    }
}

function resetScore(){
    const scoreHuman = document.getElementById('human');
    const scoreComputer = document.getElementById('computer');
    
    humanScore = 0;
    computerScore = 0;
    
    scoreHuman.textContent = humanScore;
    scoreComputer.textContent = computerScore;
}

function playGame() {
    const btnPedra = document.getElementById('pedra');
    const btnPapel = document.getElementById('papel');
    const btnTesoura = document.getElementById('tesoura');
    const resultado = document.getElementById('result');
    let arrResultado = "";

    btnPedra.addEventListener('click', function(){
        arrResultado = playRound('pedra', getComputerChoice());
        resultado.textContent = arrResultado[0];
        attScore(arrResultado[1]);
    });
    btnPapel.addEventListener('click', function(){
        arrResultado = playRound('papel', getComputerChoice());
        resultado.textContent = arrResultado[0];
        attScore(arrResultado[1]);
    });
    btnTesoura.addEventListener('click', function(){
        arrResultado = playRound('tesoura', getComputerChoice());
        resultado.textContent = arrResultado[0];
        attScore(arrResultado[1]);
    });
}

playGame();