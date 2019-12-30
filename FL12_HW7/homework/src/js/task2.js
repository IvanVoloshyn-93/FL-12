let firstPrize = 100;
let secondPrize = 50;
let thirdPrize = 25;
let prize = 0;
let maxNumber = 8;
let minNumber = 0;
let rangeStep = 4;

let number = 8;
let prize_1 = 100;
let prize_2 = 50;
let prize_3 = 25;

let playGame = confirm('Do you want to play a game?');

if(!playGame){
	alert('You did not become a billionaire, but can.')
}

while (playGame) {
    let attempts = 3;
    let randomNumber = Math.ceil(Math.random() * (Math.floor(maxNumber) - Math.ceil(minNumber)) + Math.ceil(minNumber));
    console.log(randomNumber);
    let userNumber = +prompt(`Choose a roulette pocket number from ${minNumber} to ${maxNumber} \n
                Attempts left: ${attempts} \n
                Total prize: ${prize} \n
                Possible prize on current attempt: ${firstPrize}$`,
        '0');
    if (userNumber === randomNumber) {
        prize += firstPrize;
        playGame = confirm(`Congratulation, you won!   Your prize is: ${prize}$. Do you want to continue?`);
        if (playGame) {
            maxNumber += rangeStep;
            firstPrize += firstPrize;
            secondPrize += secondPrize;
            thirdPrize += thirdPrize;
        } else {
            alert(`Thank you for your participation. Your prize is: ${prize}$`);
        }
    } else {
        attempts -= 1;
        userNumber = +prompt(`Choose a roulette pocket number from ${minNumber} to ${maxNumber} \n
                Attempts left: ${attempts} \n
                Total prize: ${prize} \n
                Possible prize on current attempt: ${secondPrize}$`,
            '0');

        if (userNumber === randomNumber) {
            prize += secondPrize;
            playGame = confirm(`Congratulation, you won!   Your prize is: ${prize}$. Do you want to continue?`);
            if (playGame) {
                maxNumber += rangeStep;
                firstPrize += firstPrize;
                secondPrize += secondPrize;
                thirdPrize += thirdPrize;
            } else {
                alert(`Thank you for your participation. Your prize is: ${prize}$`);
            }
        } else {
            attempts -= 1;
            userNumber = +prompt(`Choose a roulette pocket number from ${minNumber} to ${maxNumber} \n
                Attempts left: ${attempts} \n
                Total prize: ${prize} \n
                Possible prize on current attempt: ${thirdPrize}$`,
                '0');

            if (userNumber === randomNumber) {
                prize += thirdPrize;
                playGame = confirm(`Congratulation, you won!   Your prize is: ${prize}$. Do you want to continue?`);
                if (playGame) {
                    maxNumber += rangeStep;
                    firstPrize += firstPrize;
                    secondPrize += secondPrize;
                    thirdPrize += thirdPrize;
                } else {
                    alert(`Thank you for your participation. Your prize is: ${prize}$`);
                }
            } else {
                prize = 0;
                maxNumber = number;
                firstPrize = prize_1;
                secondPrize = prize_2;
                thirdPrize = prize_3;
                alert(`Thank you for your participation. Your prize is: ${prize}$`);
                playGame = confirm('Do you want to play the game again?')
            }
        }
    }
}
