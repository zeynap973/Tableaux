const prompt = require("prompt-sync")();
const nombreElements = Number(prompt("Entrer le nombre d'élements du tableau: "));

const tab = [];
for(let i = 0; i < nombreElements; i++){
    const element = Number(prompt("Entrer les nombres: "));
    tab.push(element);
}

let somme = 0;
for(let i = 0; i < tab.length; i++){
    somme += tab[i];
}

console.log (`la somme des éléments du tableau est: ${somme}`)