const tab = [5, 8, 2, 7];

for (let i = 0; i < tab.length/2; i++){
    let temp = tab[i];
    tab[i] = tab[tab.length-1-i];
    tab[tab.length-1-i] = temp;
}

console.log("Le tableau inversé est: ", tab);