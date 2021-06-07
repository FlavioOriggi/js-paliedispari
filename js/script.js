// Palidroma: 
//   -Chiedere all’utente di inserire una parola; 
//   -Creare una funzione per capire se la parola inserita è palindroma.

// var parola = prompt('inserisci una parola');
// console.log(parola);



// function {
  
// }




// Pari e Dispari:
//   -L’utente sceglie pari o dispari e inserisce un numero da 1 a 5; 
//   -Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione);
//   -Sommiamo i due numeri, stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione);
//   -Dichiariamo chi ha vinto.

// scelta utente di tipologia e numero 
var scelta = prompt('Scegli pari o dispari');
var numeroUtente = parseInt(prompt('Scrivi un numero da 1 a 5'));
console.log(scelta);
console.log(numeroUtente);

// generazione numero casuale del pc
var numeroPc = randomNumber(1,5);

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(numeroPc);

// Sommiamo i due numeri, stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione);
function sommaNumeri(numeroUtente, numeroPc){
    var somma = numeroUtente + numeroPc;
    return somma;
}
var risultatoSomma = sommaNumeri(numeroUtente, numeroPc);
console.log(risultatoSomma);

function pariDispari(risultatoSomma){
    if(risultatoSomma % 2 == 0){
        return true;
    }
    return false;
}

var risultatoTipologia = pariDispari(risultatoSomma);

if(risultatoTipologia){
    console.log('pari');
} else{
    console.log('dispari');

}

