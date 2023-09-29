import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import dragon from "/src/assets/dragon.jpg";

const names: string[] = ["Anthony Luong", "Jason Mai", "Vicky Li", "Anissa Vichitthavong", "Emily Xu", "Leon Truong", "Meena Ha", "Ethan Nguyen", "Jessica Chhoy", "Jung Lee"];
const positions: string[] = ["President", "Vice President", "Secretary", "Treasurer", "Bulletin Editor", "Webmaster", "Fundraising Head"];
const emails: string[] = ["anthonythienluong@gmail.com", "jasonmai52007@gmail.com", "vickyli354949@gmail.com", "anissavichitthavong@gmail.com", "emilyxu567@gmail.com", "leonkeyclub1@gmail.com", "meenaha0223@gmail.com", "ooowweeishethan@gmail.com", "chhoyjessica@gmail.com", "ljung509@gmail.com"]; 
const instagrams: string[] = ["https://www.instagram.com/antthienluong", "https://www.instagram.com/jason.mai07", "https://www.instagram.com/vickkyyy_", "https://www.instagram.com/anissavichitthavong", "https://www.instagram.com/em.xux", "https://www.instagram.com/leonmmtt/", "https://www.instagram.com/mha.vp", "https://www.instagram.com/viewethan", "https://www.instagram.com/chjessiica", "https://www.instagram.com/jung.1ee"];

let officers: React.ReactElement<any, string | React.JSXElementConstructor<any>> | JSX.Element[] = [];
let committee: React.ReactElement<any, string | React.JSXElementConstructor<any>> | JSX.Element[] = [];

for (let i = 0; i < positions.length; i++) {
    officers.push(<li>{names[i]} ({positions[i]}) --{">"} <i>{emails[i]}</i> || <a href={instagrams[i]} target="_blank">Instagram</a></li>);
}

for (let i = positions.length; i < instagrams.length; i++) {
    committee.push(<li>{names[i]} --{">"} <i>{emails[i]}</i> || <a href={instagrams[i]} target="_blank">Instagram</a></li>);
}

const Contact = () => {
    useEffect(() => {
        AOS.init();
      }, [])
      
    return (
        <div id="contact">
            <br/>
            <h1 id="contact-title">Looking for someone?</h1>  

            <ul id="board-list">
                <li id="board-title">2023-2024 Key Club Board :))</li>
                {officers}
                <li>Mr. White (Club Advisor) --{">"} <i>theodore.white@kent.k12.wa.us</i></li>
                <li>Club Committees:</li>
                <ul>
                {committee}
                </ul>
            </ul> 

            <h2 data-aos="zoom-in-right" id="error-title">See an error with the site? 🫡</h2>
            <p data-aos="zoom-in-right" id="error-paragraph">I had a lot of fun coding this website!1! However, mistakes are bound to occur. 
            Free feel to contribute 🫵 to it by letting me (Leon Truong) know or by making a <a href="https://github.com/truongmleon/Key-Club-Website/tree/main" target="_blank">pull request</a>. 
            This is an open source project under the <a href="https://github.com/truongmleon/Key-Club-Website/blob/main/LICENSE" target="_blank">MIT License</a>!</p>
            
            <h2 data-aos="zoom-in-left" id="drawing-title">Anthony's Drawing of the D32 Mascot :0</h2>
            <div className="flex">
            <img alt="drawing of d32 dragon" data-aos="flip-right" id="dragon" src={dragon}></img>
            </div>
            <br />
            <br />
        </div>
    )
}

export default Contact;