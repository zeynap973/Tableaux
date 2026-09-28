const prompt = require("prompt-sync")();
const nombreElements = Number(prompt("Entrer le nombre d'éléments: "));

const tab = [];
for (let i = 0; i < nombreElements; i++){
    const nombre = Number(prompt("Entrer un nombre: "));
    tab.push(nombre);
}

const nombreRecherche = Number(prompt("Entrer le nombre à recherché: "));

let trouve = false;
for (let i = 0; i < nombreElements; i++){
    if (tab[i] === nombreRecherche){
        trouve = true;
        break;
    }
}

if (trouve === true){
    console.log("Le nombre recherché existe dans ce tableau");
} else {
    console.log("Le nombre recherché n'existe pas dans ce tableau");
}
