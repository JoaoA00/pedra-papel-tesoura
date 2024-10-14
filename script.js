


function getComputerChoice (){
    let number = Math.random() * 10;
    let choice;

    if (number < 4) {
        choice = 'Papel';
    } else if (number < 7) {
        choice = 'Pedra';
    } else {
        choice = 'Tesoura';
    }

    return choice;
}
