const buttonElements: HTMLCollectionOf<Element> = document.getElementsByClassName("nav-btn");
const elementsArray = Array(buttonElements)[0];
console.log(elementsArray);
console.log(elementsArray.length);
for (let i = 0; i < elementsArray.length; i++) {
    console.log(elementsArray.item(i))
}

const Home = () => {
    return (
        <div id="1"></div>
    )
}

export default Home;