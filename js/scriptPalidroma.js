Palidroma: 
//   -Chiedere all’utente di inserire una parola; 
//   -Creare una funzione per capire se la parola inserita è palindroma.


// Chiedere all’utente di inserire una parola; 
var parola = prompt('inserisci una parola che pensi possa essere palidroma');

var arrayUtente = [];
arrayUtente.push(parola);

console.log(arrayUtente);


function invertiEstampaStringa(parola){
    for (var i=parola.length-1; i>=0; i--)document.write(parola.charAt(i));
    console.log("");
}

var risultato = invertiEstampaStringa(parola);
console.log(risultato);

    
  

   

