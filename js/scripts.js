var pokemonRepository = (function () {
  var pokemonList = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    console.log(pokemon);
  });
}
function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      var pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}
function loadDetails(item) {
  var url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    // Now we add the details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}
  return {
    loadList: loadList,
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadDetails: loadDetails
  };
})();
pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
// pokemonRepository.getAll().forEach(function (pokemon) {
//   var size;
//   if (pokemon.height >= 10) {
//     size = " (WOWZERS!)";
//   } else if (pokemon.height > 5 && pokemon.height < 10) {
//     size = " medium monster";
//   } else {
//     size = " small monster ";
//   }
//   var color;

//   pokemon.types.forEach(function (itemtype) {
//     if (itemtype == "Psychic") {
//       color = '<span style="color:purple;"> ';
//     } else if (itemtype == "Fire") {
//       color = '<span style="color:red;"> ';
//     } else if (itemtype == "Ghost") {
//       color = '<span style="color:dodgerblue;"> ';
//     } else if (itemtype == "Electric") {
//       color = '<span style="color:orange;">';
//     } else if (itemtype == "Fairy") {
//       color = '<span style="color:magenta;">';
//     } else if (itemtype == "Rock") {
//       color = '<span style="color:brown;">';
//     }
//   });

//   var weight;
//   if (pokemon.weight > 100) {
//     weight = "Heavy Pokemon";
//   } else if (pokemon.weight > 10 && pokemon.weight < 100) {
//     weight = "Average Pokemon weight";
//   } else {
//     weight = "Light Weight Pokemon";
//   }

//   pokemonRepository.addListItem(pokemon)
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
// });




