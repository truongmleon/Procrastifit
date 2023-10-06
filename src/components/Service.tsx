import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
    useEffect(() => {
        AOS.init();
      }, [])
      
    return (
        <div id="service-page">
            <br/>
            <h1 id="service-title">Service!</h1>  
            <ul className="event-list">
                <li className="event-title">My Favorite Past Service Events (2022-2023) :))</li>
                <li>Holiday Teacher Card Making + Gingerbread House Raffle</li>
                <li>Book Drive for KCLS</li>
                <li>Agricultural Club Collab @ the Greenhouse</li>
                <li>Health Equity Collab w/ Card Making for Elderly Homes</li>
                <li>Tutoring opportunity at Sunrise Elementary School</li>
            </ul> 
            <ul className="event-list">
                <li className="event-title">Ongoing Events :3</li>
                <li> 
                    <a href="https://upchieve.org/volunteer-with-us" target="_blank">UPchieve</a> (Indefinite)
                    <li className="event-info">Tutor from elementary English/math/science to the high school level (I enjoy tutoring AP Calculus!)</li>
                    <li className="event-info">Students who use UPchieve are typically economically disadvantaged students; you'll make a large impact!</li>
                    <li className="event-info">Consider that a significant part of Kentwood's student body receives Free/Reduced Lunch</li>
                </li>
                <li>Book Drive for KCLS</li>
            </ul> 

            <h2 data-aos="zoom-in-right" id="error-title">See an error with the site? 🫡</h2>
            <p data-aos="zoom-in-right" id="error-paragraph">I had a lot of fun coding this website!1! However, mistakes are bound to occur. 
            Free feel to contribute 🫵 to it by letting me (Leon Truong) know or by making a <a href="https://github.com/truongmleon/Key-Club-Website/tree/main" target="_blank">pull request</a>. 
            This is an open source project under the <a href="https://github.com/truongmleon/Key-Club-Website/blob/main/LICENSE" target="_blank">MIT License</a>!</p>
            
        </div>
    )
}

export default Service;