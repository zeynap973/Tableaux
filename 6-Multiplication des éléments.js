const prompt = require("prompt-sync")();
const nombreElements = Number(prompt("Entrer le nombre d'éléments: "));

const tab = [];
for (let i = 0; i < nombreElements; i++){
    const element = Number(prompt("Entrer un nombre: "));
    tab.push(element);
}

const k = Number(prompt("Entrer le facteur de multiplication: "))

for (let i = 0; i < nombreElements; i++){
    tab[i] = tab[i] * k;
}
console.log(tab);