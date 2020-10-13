var pokemonRepository = (function () {
  var pokemonList = [
    {
      name: "Mewtwo",
      height: 7,
      types: ["Psychic"],
      weight: 70,
    },
    {
      name: "Charizard",
      height: 15,
      types: ["Fire", "Flying"],
      weight: 300,
    },
    {
      name: "Haunter",
      height: 4,
      types: ["Ghost", "Poison"],
      weight: 50,
    },
    {
      name: "Pikachu",
      height: 2,
      types: ["Electric"],
      weight: 2,
    },
    {
      name: "Jigglypuff",
      height: 1,
      types: ["Fairy"],
      weight: 1,
    },
    {
      name: "Onix",
      height: 28,
      types: ["Rock"],
      weight: 460,
    },
  ];
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }
function addListItem (pokemon){
  let ul=document.querySelector(".pokemonList");
  let li=document.createElement("li");
  let button=document.createElement('button');
  button.innerText=pokemon.name;
  li.appendChild(button);
  ul.appendChild(li);
  button.addEventListener("click",function(event){
    showDetails(pokemon)
  })
} 
function showDetails(pokemon){
  console.log(pokemon)

}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();
pokemonRepository.add({
  name: "Pikachu",
  height: 0.3,
  types: ["Electric"],
  weight: 10,
});
pokemonRepository.getAll().forEach(function (pokemon) {
  var size;
  if (pokemon.height >= 10) {
    size = " (WOWZERS!)";
  } else if (pokemon.height > 5 && pokemon.height < 10) {
    size = " medium monster";
  } else {
    size = " small monster ";
  }
  var color;

  pokemon.types.forEach(function (itemtype) {
    if (itemtype == "Psychic") {
      color = '<span style="color:purple;"> ';
    } else if (itemtype == "Fire") {
      color = '<span style="color:red;"> ';
    } else if (itemtype == "Ghost") {
      color = '<span style="color:dodgerblue;"> ';
    } else if (itemtype == "Electric") {
      color = '<span style="color:orange;">';
    } else if (itemtype == "Fairy") {
      color = '<span style="color:magenta;">';
    } else if (itemtype == "Rock") {
      color = '<span style="color:brown;">';
    }
  });

  var weight;
  if (pokemon.weight > 100) {
    weight = "Heavy Pokemon";
  } else if (pokemon.weight > 10 && pokemon.weight < 100) {
    weight = "Average Pokemon weight";
  } else {
    weight = "Light Weight Pokemon";
  }

  pokemonRepository.addListItem(pokemon)
  // document.write(
  //   '<div class="box">' +
  //     pokemon.name +
  //     " (height: " +
  //     pokemon.height +
  //     ")" +
  //     "<br>" +
  //     "weight: " +
  //     pokemon.weight +
  //     " lbs " +
  //     weight +
  //     "<br>" +
  //     size +
  //     color +
  //     "<br>" +
  //     pokemon.types +
  //     "</div>"
  // );
});




