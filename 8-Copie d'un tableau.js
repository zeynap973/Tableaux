const prompt = require("prompt-sync")()
const nombreElements = Number(prompt("Entrer le nombre d'éléments: "));

const tab = [];
for (let i = 0; i < nombreElements; i++){
    const element = Number(prompt("Entrer un nombre: "));
    tab.push(element);
}

console.log("Le tableau original est: ", tab);

const copie = [];
for (let i = 0; i < nombreElements; i++){
    copie.push(tab[i]);
}

console.log("Le tableau copié est: ", copie);