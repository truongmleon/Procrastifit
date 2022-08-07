fetch("https://raw.githubusercontent.com/truongmleon/PokemonSpritedex/main/pokemon.json?token=GHSAT0AAAAAABXC4PLYVS2TKJGYRNYQOGDUYXPFHQA")
.then(response => console.log(response.json()))
.then(data => {

    let pokemonValues = Object.values(data)
    console.log(pokemonValues)
    //let text = document.getElementById('text').innerHTML = pokemonValues[0]['jap']
    //let img:HTMLImageElement = document.getElementById("img")!.src = pokemonValues[1]['image'];
})

