const prompt = require (`prompt-sync`)();
const nombreElements = Number(prompt("Entrer le nombre d'éléments du tableau: "));

const tab = [];
for(let i = 0; i < nombreElements; i++){
    const elements = Number(prompt("Entrer les nombres: "))
    tab.push(elements);
}

let max = tab[0];
for(let i = 0; i < tab.length; i++){
    if (tab[i] > max){
        max = tab[i];
    }
}

console.log(`Le plus grand élément dans ce tableau est: ${max}`);