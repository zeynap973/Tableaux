const prompt = require (`prompt-sync`)();
const nombreElements = Number(prompt("Entrer le nombre d'éléments du tableau: "));

const tab = [];
for(let i = 0; i < nombreElements; i++){
    const elements = Number(prompt("Entrer les nombres: "))
    tab.push(elements);
}


let min = tab[0];
for(let i = 0; i < tab.length; i++){
    if (tab[i] < min){
        min = tab[i];
    }
}

console.log(`Le plus petit élément dans ce tableau est: ${min}`);