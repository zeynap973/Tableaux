const prompt = require("prompt-sync")();
const nombreElements = Number(prompt("Entrer le nombre d'éléments du tableau: "));

const tableau = [];
for(let i = 0; i < nombreElements; i++){
    const elements = Number(prompt("Entrer les nombres: "));
    tableau.push(elements);
}

console.log("Votre tableau est: ", tableau);