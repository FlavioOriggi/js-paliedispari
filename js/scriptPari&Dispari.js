// Pari e Dispari:
//   -L’utente sceglie pari o dispari e inserisce un numero da 1 a 5; 
//   -Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione);
//   -Sommiamo i due numeri, stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione);
//   -Dichiariamo chi ha vinto.


// scelta utente di tipologia e numero
var submit = document.getElementById('submit');

submit.addEventListener("click", function(){

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
    var risultatoSomma = sommaNumeri(numeroUtente, numeroPc);

    function sommaNumeri(numeroUtente, numeroPc){
        var somma = numeroUtente + numeroPc;
        return somma;
    }
    console.log(risultatoSomma);

    function pariDispari(risultatoSomma){
        if(risultatoSomma % 2 == 0){
            return true;
        }
        return false;
    }
    var risultatoGenere = pariDispari(risultatoSomma);

    // Dichiariamo chi ha vinto
    if (risultatoGenere){   
        if(risultatoGenere && scelta == 'pari'){
            document.getElementById('esitoGara').innerHTML = 'Hai vinto';
            console.log('hai vinto');
        } else{
            document.getElementById('esitoGara').innerHTML = 'Hai perso!';
            console.log('hai perso');
        }
    } else if (risultatoGenere == false && scelta == 'dispari'){
        document.getElementById('esitoGara').innerHTML = 'Hai vinto';
        console.log('hai vinto');
    } else{
        document.getElementById('esitoGara').innerHTML = 'Hai perso!';
        console.log('hai perso');
    }
    

});
