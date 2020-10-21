// INPUT
   // sconto
   var sconto;
   var prezzoFinale;
   // richiesta numero età passeggero
   var numeroEta = parseInt(prompt("Benvenuto! Quanti anni hai?"));

   // richiesta numero kilometri
   var numeroKm = parseInt(prompt("Per quanti kilometri devi viaggiare?"));

// prezzo biglietto
var prezzoBiglietto = (0.21 * numeroKm).toFixed(2);

// SCONTI (con approssimazione a due decimali)
if (numeroEta < 18) { // sconto under 18
   prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto / 100) * 20).toFixed(2) + (" (-20%)"); //sconto minorenni del 20%

} else if (numeroEta >= 65){  //sconto over 65
   prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto / 100) * 40).toFixed(2) + (" (-40%)"); //sconto over 65 del 40%

}

// OUTPUT
document.getElementById("prezzo").innerHTML = prezzoBiglietto  + (" €");
