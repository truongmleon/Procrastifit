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
          <li className="gen-btn" id="gen-one">Generation 1</li>
          <li id="gen-two">Generation 2</li>
          <li id="gen-three">Generation 3</li>
          <li id="gen-four">Generation 4</li>
          <li id="gen-five">Generation 5</li>
          <li id="gen-six">Generation 6</li>
          <li id="gen-seven">Generation 7</li>
          <li id="gen-eight">Generation 8</li>
          <li id="gen-nine">Items</li>
        </ul>
      </nav>
    </header>
  )
}


export default Navbar;