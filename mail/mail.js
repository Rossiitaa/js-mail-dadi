//! creiamo una variabile con l'array 
//? chiediamo all'utente di inserire la sua mail
//# creiamo il presupposto che l'email non esista nell'array
// controlliamo che l'email inserita dall'utente sia valida
    //* console.log(i)
    // se l'email è valida gli assegnamo un valore positivo 

const emailValidation = ['boolean@gmail.com', 'rosario@outlook.it', 'pincopallino@live.it', 'mailfinta@libero.it', 'mailvera@virgilio.it', 'ultimamail@hotmail.it'];
console.log(emailValidation);

const userMail = prompt('Enter your email');

let emailFound = false;

for (let i = 0; i < emailValidation.length; i++) {
    const element = emailValidation[i];

    if (userMail === element) {
        emailFound = true;
    }
}
console.log(emailFound);