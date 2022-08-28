setTimeout(() => { //Not sure why I need setTimeout, but it works...
  const buttonElements: HTMLCollectionOf<Element> = document.getElementsByClassName("nav-btn");
  const arrayOfGens:string[] = ["home", 
  "gen-one-container",
  "gen-two-container",
  "gen-three-container",
  "gen-four-container", 
  "gen-five-container", 
  "gen-six-container",  
  "gen-seven-container",
  "gen-eight-container"];

  for (let i = 0; i < buttonElements.length; i++) {
    const element = buttonElements.item(i) as HTMLElement;
    element.addEventListener("click", () => {
      const addingContainer = document.getElementById(arrayOfGens[i]) as HTMLElement;

      arrayOfGens.forEach(element => {
        const container = document.getElementById(element) as HTMLElement;
        container.style.display = 'none';
      });
      console.log(addingContainer)
      addingContainer.id == 'home' ? addingContainer.style.display = "block" : addingContainer.style.display = "flex";
    });
  }

}, 1);

const Navbar = () => {
  return (
    <header className="">
      <div id='header-container'>
      <h1>Pokémon Spritedex</h1>
      <img id='pokeball' src="/src/pokeball.gif" alt="pokeballs" />
      </div>
      <nav>
        <ul id='nav-elements'>
          <li className="nav-btn" id='gen-home'>Home</li>
          <li className="nav-btn" id="gen-one">Generation 1</li>
          <li className="nav-btn" id="gen-two">Generation 2</li>
          <li className="nav-btn" id="gen-three">Generation 3</li>
          <li className="nav-btn" id="gen-four">Generation 4</li>
          <li className="nav-btn" id="gen-five">Generation 5</li>
          <li className="nav-btn" id="gen-six">Generation 6</li>
          <li className="nav-btn" id="gen-seven">Generation 7</li>
          <li className="nav-btn" id="gen-eight">Generation 8</li>
          <li className="nav-btn" id="gen-nine">Items</li>
        </ul>
      </nav>
    </header>
  )
}


export default Navbar;