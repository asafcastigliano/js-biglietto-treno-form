

const PREZZO = 0.21;

let totale = km * PREZZO;

let sconto = 0;

if(age < 18){
    sconto = totale * 0.2;
} else if (age >= 65){
    sconto = totale * 0.4;
}

totale = (totale - sconto).toFixed(2);

console.log(totale + "€");