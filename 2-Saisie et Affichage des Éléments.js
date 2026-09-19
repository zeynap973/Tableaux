const prompt = require("prompt-sync")();
let lenght = Number(prompt("Entrer le nombre d'éléments du tableau: "));

let tableau = [];
let i = 0;
while (i < lenght) {
    let element = prompt("saisir l'élément: ");
    tableau.push(element);
    i++;
}

console.log(`Votre tableau est: tab = [${tableau}]`);