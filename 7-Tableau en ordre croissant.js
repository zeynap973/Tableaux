const prompt = require("prompt-sync")();
const nombreElements = Number(prompt("Entrer le nombre d'éléments: "));

const tab = [];

for (let i = 0; i < nombreElements; i++){
    const nombre = Number(prompt("Entrer un nombre: "));
    tab.push(nombre);
}

for (let i = 0; i < nombreElements-1; i++){
    for (let j = 0; j < nombreElements-1-i; j++){
        if (tab[j] > tab[j+1]){
            let temp = tab[j];
            tab[j] = tab[j+1];
            tab[j+1] = temp;
        }
    }
}

console.log("Le tableau trié par ordre croissant est: ", tab);
