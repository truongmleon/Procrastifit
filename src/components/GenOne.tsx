const GenOne = () => {
    let data:any = {};
    let elements:any[] = [];

    let ids:string[] = [];
    let japNames:string[] = [];

    let redAndBlueFront:string[] = [];
    let redAndBlueBack:string[] = [];

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
        ids.push(data['Pokémon']["Red/Blue"]['Front sprites'][pokemonNames[i]]["id"]);
        japNames.push(data['Pokémon']["Red/Blue"]['Front sprites'][pokemonNames[i]]['jap']);

        redAndBlueFront.push(data['Pokémon']["Red/Blue"]['Front sprites'][pokemonNames[i]]['image']);
        redAndBlueBack.push(data['Pokémon']["Red/Blue"]['Back sprites'][pokemonNames[i]]['image']);

        elements.push(<tr>
            <td className='highlight'>{ids[i]}</td>
            <td className='highlight'>{pokemonNames[i]}</td>
            <td className='highlight'>{japNames[i]}</td>
            <td>
            <img draggable="false" src={redAndBlueFront[i]} alt={pokemonNames[i]} />
                <img draggable="false" src={redAndBlueBack[i]} alt={pokemonNames[i]} />
            </td>
            <td>GB Super (Green)</td>
            <td>GB Super (Yellow)</td>
            <td>GB (Red/blue)</td>
            <td>GB (Green)</td>
            <td>GB (Yellow)</td>
            <td>GBC (Yellow)</td> 
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
                <th>GB Super (Red/Blue)</th>
                <th>GB Super (Green)</th>
                <th>GB Super (Yellow)</th>
                <th>GB (Red/Blue)</th>
                <th>GB (Green)</th>
                <th>GB (Yellow)</th>
                <th>GBC (Yellow)</th>
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
