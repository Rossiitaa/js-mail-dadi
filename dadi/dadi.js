// creazione variabile per numero random pc
//^ creazione variabile per numero randon utente
    //? se il numero random pc > numero random utente, allora il pc vince
    //? altrimenti se numero random pc < numero random utente, allora l'utente vince

let numberPc = Math.floor((Math.random()) * 6) + 1;
console.log(numberPc)

let numberUser = Math.floor((Math.random()) * 6) + 1;
console.log(numberUser)

if (numberPc > numberUser) {
    console.log('The computer wins, Game over!!')
} else if (numberPc < numberUser) {
    console.log('Congratulations, you beat the computer. You won!!')
} else {
    console.log('Draw, no one won!')
}