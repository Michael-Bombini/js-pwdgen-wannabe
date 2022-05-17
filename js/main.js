/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito22
*/


const nome = prompt("Inserisci il tuo nome");
const cognome = prompt("inserisci il tuo cognome");
const colorePreferito = prompt("inserisci il tuo colore preferito");

const pwGenerated = document.getElementById("password");
pwGenerated.innerHTML = ` <h1>La tua password generata è : </h1> <br>
<p>${nome}${cognome}${colorePreferito}2022</p> `;
