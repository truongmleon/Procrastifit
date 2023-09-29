const info = document.getElementById("info");

info?.addEventListener("click", () =>{
    window.open("https://www.youtube.com/watch?v=P5OpsyHhzwM");
});

const Home = () => {
    return (
        <div id="home">
            <br/>
            <h1 id="title">Kentwood High School</h1>   
        </div>
    )
}

export default Home;