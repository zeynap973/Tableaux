const prompt = require (`prompt-sync`)();
let lenght = Number(prompt("Entrer le nombre d'éléments du tableau: "));

const tableau = [];
let i = 0;

while (i < lenght) {
    let element = Number(prompt("saisir l'élément: "));
    tableau.push(element);
    i++;
}

let max = tableau [0];
i = 1;

while (i < lenght){
    if (tableau[i] > max){
        max = tableau[i];
    }
    i++;
}

console.log(`Le plus grand élément dans ce tableau est: ${max}`);