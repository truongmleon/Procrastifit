"use strict";
fetch("pokemon.json")
    .then(response => response.json())
    .then(data => {
    let pokemon = data["Generation 1"]["Pokémon"]["Red/Blue"]["Blubasaur"];
    let pokemonValues = Object.values(data["Generation 1"]["Pokémon"]["Red/Blue"]);
    let text = document.getElementById('text').innerHTML = pokemonValues[0]["jap"];
    let img = document.getElementById("img").src = pokemonValues[1]['image'];
});
let arr = [
    'https://drive.google.com/file/d/1HbCc3Y5tvowef9gnH8WHln_zAcGa0tke/view?usp=sharing',
    'https://drive.google.com/file/d/1w3M3avfsOFb4wK7D1xIAgEqVezPAFd41/view?usp=sharing'
];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    let data = arr[i].substring(32, arr[i].indexOf("/view?usp=sharing"));
    newArr.push("https://drive.google.com/uc?id=" + data);
}
console.log(newArr);
