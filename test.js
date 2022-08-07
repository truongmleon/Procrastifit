"use strict";
fetch("pokemon.json")
    .then(response => response.json())
    .then(data => {
    let pokemonValues = data["Generation one"];
    console.log(pokemonValues);
    //let text = document.getElementById('text').innerHTML = pokemonValues[0]['jap']
    //let img:HTMLImageElement = document.getElementById("img")!.src = pokemonValues[1]['image'];
});
