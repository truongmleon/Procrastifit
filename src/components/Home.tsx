const Home = () => {
    return (
        <main id="homepage">
        <div className="generations" id='home'>
            <img id="wooper" src="/src/wooper.gif" alt="wooper" />
            <h2>About</h2>
        <p className='info'>On this website, you will can view many sprites from the different Pokémon games.
            I tried to include every sprite I found on the web. Some however, do not have an image.
            I thought this was a cool project, I enjoyed Pokémon a lot as a kid.
        </p>
            <h2>Crediting</h2>
            <ul id='crediting'>
            <li>© Nintendo/Creatures Inc./GAME FREAK Inc.</li>
            <li>License: MIT license</li>
            </ul>
        </div>
    </main>
    )
}

export default Home;