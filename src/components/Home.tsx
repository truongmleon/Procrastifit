const info = document.getElementById("info");

info?.addEventListener("click", () =>{
    window.open("https://youtu.be/PVv1n0GDN_w");
});

const Home = () => {
    return (
        <div id="home">
            <br/>
            <h1 id="title">Kentwood High School</h1>   
            <h1 id="club-title"><em>National Honors Society</em></h1> 
        </div>
    )
}

export default Home;