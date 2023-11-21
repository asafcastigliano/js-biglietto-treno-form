const genera = document.querySelector(".genera");
genera.addEventListener("click", function(){
    let nome = document.getElementById("nome").value;
    let km = document.getElementById("km").value;
    let age = document.getElementById("age").value;

    document.getElementById("passeggero").innerHTML = "<b>NOME PASSEGGERO<br>" + nome + "<b>";

    document.getElementById("carrozza-titolo").innerHTML = "<b>Carrozza<b>";
    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;

    document.getElementById("cp-titolo").innerHTML = "<b>Codice CP  <b>";
    document.getElementById("cp").innerHTML = Math.floor(Math.random() * 90000) + 10000;

    const PREZZO = 0.21;
    let totale = km * PREZZO;
    let sconto = 0;

    document.getElementById("offerta-titolo").innerHTML = "<b>Offerta<b>";

    if(age == "minorenne"){
        document.getElementById("offerta").innerHTML = "Biglietto Minorenni";
        sconto = totale * 0.2;
    } else if(age == "anziano"){
        document.getElementById("offerta").innerHTML = "Biglietto Over 65";
        sconto = totale * 0.4;
    } else {
        document.getElementById("offerta").innerHTML = "Biglietto Standard";
    }

    document.getElementById("costo-titolo").innerHTML = "<b>Costo biglitetto<b>";

    document.getElementById("costo").innerHTML = totale = (totale - sconto).toFixed(2) + "€";
})

const annulla = document.querySelector(".annulla");
annulla.addEventListener("click", function(){
    document.getElementById("passeggero").innerHTML = "";

    document.getElementById("carrozza-titolo").innerHTML = "";
    document.getElementById("carrozza").innerHTML = "";

    document.getElementById("cp-titolo").innerHTML = "";
    document.getElementById("cp").innerHTML = ""

    document.getElementById("offerta-titolo").innerHTML = "";
    document.getElementById("offerta").innerHTML = "";

    document.getElementById("costo-titolo").innerHTML = "";
    document.getElementById("costo").innerHTML = "";
})