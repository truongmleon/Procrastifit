const GenOne = () => {
    let data:any = {};
    let elements:any[] = [];

    function reqListener (this: any) {
        data = JSON.parse(this.responseText);
    }

    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", "./data/gen1.json", false);
    req.send();
    
    //Names and ids from all games are the same
    let pokemonNames = Object.keys(data['Pokémon']["Red/Blue"]['Front sprites']);
    for (let i = 0; i < pokemonNames.length; i++) {
        //elements.push(<img src={image} alt={pokemonNames[i]}/>)
        //console.log(data['Pokémon']["Green"]['Gameboy sprites'][pokemonNames[64]]['image'])

        elements.push(<tr>
            <td className='highlight'>{data['Pokémon']["Red/Blue"]['Front sprites'][pokemonNames[i]]["id"]}</td>
            <td className='highlight'>{pokemonNames[i]}</td>
            <td className='highlight'>{data['Pokémon']["Red/Blue"]['Front sprites'][pokemonNames[i]]['jap']}</td>
            <td>
            <img draggable="false" src={data['Pokémon']["Red/Blue"]['Gameboy sprites'][pokemonNames[i]]['image']} alt={pokemonNames[i]} />
            <img draggable="false" src={data['Pokémon']["Red/Blue"]['Gameboy back sprites'][pokemonNames[i]]['image']} alt={pokemonNames[i]} />
            </td>
            <td>
            <img draggable="false" src={data['Pokémon']["Green"]['Gameboy sprites'][pokemonNames[i]]['image']} alt={pokemonNames[i]} />
            <img draggable="false" src={data['Pokémon']["Green"]['Gameboy back sprites'][pokemonNames[i]]['image']} alt={pokemonNames[i]} />
            </td>
            <td>
            <img draggable="false" src={data['Pokémon']["Yellow"]['Gameboy sprites'][pokemonNames[i]]['image']} alt={pokemonNames[i]} />
            <img draggable="false" src={data['Pokémon']["Yellow"]['Gameboy back sprites'][pokemonNames[i]]['image']} alt={pokemonNames[i]} />
            </td>
            <td>
            <img draggable="false" src={data['Pokémon']["Red/Blue"]['Front sprites'][pokemonNames[i]]['image']} alt={pokemonNames[i]} />
            <img draggable="false" src={data['Pokémon']["Red/Blue"]['Back sprites'][pokemonNames[i]]['image']} />
            </td>
            <td>
            <img draggable="false" src={data['Pokémon']["Green"]['Front sprites'][pokemonNames[i]]['image']} alt={pokemonNames[i]} />
            <img draggable="false" src={data['Pokémon']["Green"]['Back sprites'][pokemonNames[i]]['image']} alt={pokemonNames[i]} />
            </td>
            <td>
            <img draggable="false" src={data['Pokémon']["Yellow"]['Front sprites'][pokemonNames[i]]['image']} /> 
            <img draggable="false" src={data['Pokémon']["Yellow"]['Back sprites'][pokemonNames[i]]['image']} /> 
            </td>
            <td>
            <img draggable="false" src={data['Pokémon']["Yellow"]['Gameboy Color sprites'][pokemonNames[i]]['image']} alt={pokemonNames[i]} />  
            <img draggable="false" src={data['Pokémon']["Yellow"]['Gameboy Color back sprites'][pokemonNames[i]]['image']} alt={pokemonNames[i]} />  
            </td> 
            <td>Trainer Name</td>
            <td>GB Trainers</td>
            <td>GBC Trainers (Yellow)</td>
        </tr>)

    }

    return <div>
        <div className="flex">
        <table>
            <thead>
            <tr>
                <th>Number</th>
                <th>Name</th>
                <th>名前/ローマ字</th>
                <th>GB (Re/Bl)</th>
                <th>GB (Green)</th>
                <th>GB (Yellow)</th>
                <th>GB(C) Super (Re/Bl)</th>
                <th>GB(C) Super (Green)</th>
                <th>GB(C) Super (Yellow)</th>
                <th>GBC (Yellow)</th>
                <th>Trainer Name</th>
                <th>GB Trainers</th>
                <th>GBC Trainers (Yellow)</th>
            </tr>
            </thead>
            <tbody>
                {elements}
            </tbody>
        </table>
        </div>
    </div>
}

export default GenOne;
