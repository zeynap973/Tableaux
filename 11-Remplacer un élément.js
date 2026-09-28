const prompt = require(`prompt-sync`)();
const nombreElements = Number(prompt("Entrer le nombre d'éléments: "));

const tab = [];

for(i = 0; i < nombreElements; i++){
    const nombre = Number(prompt("Entrer un nombre: "));
    tab.push(nombre);
}
console.log("Le tableau avant: ", tab);

const valeurRemplace = Number(prompt("Entrer la valeur à remplacer: "));
const valeurNouvelle = Number(prompt("Entrer la valeur nouvelle: "));

for(let i = 0; i < nombreElements; i++){
    if (tab[i] === valeurRemplace){
        tab[i] = valeurNouvelle;
    }
}
console.log("Le tableau après: ", tab);