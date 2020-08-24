var pokemonList = [
    {
        name: "Mewtwo(height:7)",
        types: ['psychic'],
    },
    {
        name: "Charizard(height:15)",
        types: ['fire', 'flying'],
    },
    {
        name: "Haunter(height:4)",
        types: ['ghost', 'poison'],
    },
];
console.log(pokemonList)
for (let i = 0; i < pokemonList.length; i++) {
    document.write('<h2>' + pokemonList[i].name + '</h2>' + ' height: ' + pokemonList[i].height)
    if (pokemonList[i].height >= 4.07) {
        document.write(' (Wow that\'s big!)')
    }
}





