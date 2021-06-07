Palidroma: 
//   -Chiedere all’utente di inserire una parola; 
//   -Creare una funzione per capire se la parola inserita è palindroma.


// Chiedere all’utente di inserire una parola; 
var parola = prompt('inserisci una parola che pensi possa essere palidroma');

var risultato = testPalidroma(parola);
document.getElementById('esitoGara').innerHTML = risultato;

function testPalidroma(parola){

    for(var i=0; i<parola.length; i++){
        if (parola[i] != parola[parola.length - (i+1)]){
            return 'Non e\' palidroma';
        }        
    }
    return 'E\' palidroma';       
}



    
  

   

