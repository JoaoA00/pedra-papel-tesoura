


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

