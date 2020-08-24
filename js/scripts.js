var pokemonList = [
  {
    name: "Mewtwo",
    height: 7,
    types: ["Psychic"],
  },
  {
    name: "Charizard",
    height: 15,
    types: ["Fire", "Flying"],
  },
  {
    name: "Haunter",
    height: 4,
    types: ["Ghost", "Poison"],
  },
];
console.log(pokemonList);
for (var i = 0; i < pokemonList.length; i++) {
  var size;
  if (pokemonList[i].height >= 10) {
    size = " (Wow that's big!)";
  } else if (pokemonList[i].height > 5 && pokemonList[i].height < 10) {
    size = " mediummonster";
  } else {
    size = " smallmonster ";
  }
  var color;
  for (var item = 0; item < pokemonList[i].types.length; item++) {
    if (pokemonList[i].types[item] == "Psychic") {
      color = '<span style="color:purple;"> ';
    } else if (pokemonList[i].types[item] == "Fire") {
      color = '<span style="color:red;"> ';
    } else if (pokemonList[i].types[item] == "Ghost") {
      color = '<span style="color:blue;"> ';
    }
  }
  console.log(pokemonList[i].types.length);
  document.write(
    '<div class="box">' +
      pokemonList[i].name +
      " (height: " +
      pokemonList[i].height +
      ")" +
      "<br>" +
      size +
      color +
      "<br>" +
      pokemonList[i].types +
      "</div>"
  );
}
