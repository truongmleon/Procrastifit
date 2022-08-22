const Navbar = () => {
  return (
    <header className="">
      <div id='header-container'>
      <h1>Pokémon Spritedex</h1>
      <img id='pokeball' src="/src/pokeball.gif" alt="pokeballs" />
      </div>
      <nav>
        <ul>
          <li>
            Generation One
          </li>
          <li>
            Generation Two
          </li>
          <li>
            Generation Three
          </li>
          <li>
            Generation Four
          </li>
          <li>
            Generation Five
          </li>
          <li>
            Generation Six
          </li>
          <li>
            Generation Seven
          </li>
          <li>
            Generation Eight
          </li>
          <li>
            Items
          </li>
        </ul>
      </nav>
    </header>
  )
}


export default Navbar;