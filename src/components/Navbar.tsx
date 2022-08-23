const Navbar = () => {
  return (
    <header className="">
      <div id='header-container'>
      <h1>Pokémon Spritedex</h1>
      <img id='pokeball' src="/src/pokeball.gif" alt="pokeballs" />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Generation 1</li>
          <li>Generation 2</li>
          <li>Generation 3</li>
          <li>Generation 4</li>
          <li>Generation 5</li>
          <li>Generation 6</li>
          <li>Generation 7</li>
          <li>Generation 8</li>
          <li>Items</li>
        </ul>
      </nav>
    </header>
  )
}


export default Navbar;