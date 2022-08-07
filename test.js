"use strict";
fetch("./Generations/GenerationOne.json")
    .then(response => response.json())
    .then(data => {
    let pokemonValues = Object.values(data["Pokémon"]);
    console.log(pokemonValues);
    //let text = document.getElementById('text').innerHTML = pokemonValues[0]['jap']
    //let img:HTMLImageElement = document.getElementById("img")!.src = pokemonValues[1]['image'];
});
