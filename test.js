"use strict";
fetch("GenerationOne.json")
    .then(response => response.json())
    .then(data => {
    let pokemonValues = Object.values(data["Pokémon"]["Red/Blue"]);
    let text = document.getElementById('text').innerHTML = pokemonValues[0]["jap"];
    let img = document.getElementById("img").src = pokemonValues[1]['image'];
});
let arr = [];
let newArr = [];
//Converting into an image html can use
for (let i = 0; i < arr.length; i++) {
    let data = arr[i].substring(32, arr[i].indexOf("/view?usp=sharing"));
    newArr.push("https://drive.google.com/uc?id=" + data);
}
console.log(newArr);
