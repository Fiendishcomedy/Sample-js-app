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
    showModal(pokemon)
  });
}
function showModal(pokemon) {
  var $modalContainer = document.querySelector("#modal-container");
  //clear existing content of the model
  $modalContainer.innerHTML = "";
  //creating div element in DOM
  var modal = document.createElement("div");
  //adding class to div DOM element
  modal.classList.add("modal");
  //creating closing button in modal content
  var closeButtonElement = document.createElement("button");
  closeButtonElement.classList.add("modal-close");
  closeButtonElement.innerText = "Close";
  // adding event listener to close modal when clicked on button
  closeButtonElement.addEventListener("click", hideModal);
  //creating element for name in modal content
  var nameElement = document.createElement("h1");
  nameElement.innerText = pokemon.name;
  // creating img in modal content
  var imageElement = document.createElement("img");
  imageElement.classList.add("modal-img");
  imageElement.setAttribute("src", pokemon.imageUrl);
  //creating element for height in modal content
  var heightElement = document.createElement("p");
  heightElement.innerText = "height : " + pokemon.height;
  //creating element for weight in modal content
  var weightElement = document.createElement("p");
  weightElement.innerText = "weight : " + pokemon.weight;
  //creating element for type in modal content
  var typesElement = document.createElement("p");
  typesElement.innerText = "types : " + pokemon.types;
  //creating element for abilities in modal content
  var abilitiesElement = document.createElement("p");
  abilitiesElement.innerText = "abilities : " + pokemon.abilities;
  //appending modal content to webpage
  modal.appendChild(closeButtonElement);
  modal.appendChild(nameElement);
  modal.appendChild(imageElement);
  modal.appendChild(heightElement);
  modal.appendChild(weightElement);
  modal.appendChild(typesElement);
  modal.appendChild(abilitiesElement);
  $modalContainer.appendChild(modal);
  //adds class to show the modal
  $modalContainer.classList.add("is-visible");
}
function hideModal() {
  var $modalContainer = document.querySelector("#modal-container");
  $modalContainer.classList.remove("is-visible");
}
//hides modal when clicked on ESC on keyboard
window.addEventListener("keydown", (e) => {
  var $modalContainer = document.querySelector("#modal-container");
  if (
    e.key === "Escape" &&
    $modalContainer.classList.contains("is-visible")
  ) {
    hideModal();
  }
});
//hides modal if clicked outside of it
var $modalContainer = document.querySelector("#modal-container");
$modalContainer.addEventListener("click", (e) => {
  var target = e.target;
  if (target === $modalContainer) {
    hideModal();
  }
});
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
    item.imageUrl = details.sprites.other.dream_world.front_default;
    item.height = details.height;
    item.weight = details.weight;
    item.types = [];
    details.types.forEach(function(itemtype){
      item.types.push(itemtype.type.name)
    })
    item.abilities = [];
    details.abilities.forEach(function(itemability){
      item.abilities.push(itemability.ability.name)
    })
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

