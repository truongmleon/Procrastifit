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
                <li className="event-title" data-aos="fade-left">My Favorite Past Service Events (2022-2023) :))</li>
                <li data-aos="fade-left">Holiday Teacher Card Making + Gingerbread House Raffle</li>
                <li data-aos="fade-right">Book Drive for KCLS</li>
                <li data-aos="fade-left">Agricultural Club Collab @ the Greenhouse</li>
                <li data-aos="fade-right">Health Equity Collab w/ Card Making for Elderly Homes</li>
                <li data-aos="fade-left">Tutoring opportunity at Sunrise Elementary School</li>
            </ul> 
            <ul className="event-list">
                <li className="event-title" data-aos="fade-right">Ongoing Events :3</li>
                <li> 
                    <b data-aos="fade-left" className="event-name"><a className="event" href="https://upchieve.org/volunteer-with-us" target="_blank">UPchieve</a> (Indefinite)</b>
                    <li className="event-info" data-aos="fade-right">Tutor from elementary English/math/science to the high school level (I enjoy tutoring AP Calculus!)</li>
                    <li className="event-info" data-aos="fade-left">Students who use UPchieve are typically economically disadvantaged students; you'll make a large impact!</li>
                    <li className="event-info" data-aos="fade-right">Consider that a significant part of Kentwood's student body receives Free/Reduced Lunch</li>
                </li>

                <li>
                    <b data-aos="fade-left" className="event-name"><a className="event" href="https://play.freerice.com/profile-login" target="_blank">FREERICE</a> (Indefinite)</b>
                    <li className="event-info" data-aos="fade-right">I suggest creating an account to keep track of your progress</li> 
                    <li className="event-info" data-aos="fade-left">For every question answered correctly, 10 grams of rice is donated for the World Food Programme</li>
                    <li className="event-info" data-aos="fade-right">Questions include science, math, humanities, and foreign language</li>
                    <li className="event-info" data-aos="fade-left">I highly encourage using this as a possible learning website instead of simply service hours (learning my French vocab has been pretty nice!)</li>
                    <li className="event-info" data-aos="fade-right">Use this <a href="https://docs.wfp.org/api/documents/WFP-0000145023/download/" target="_blank">form</a> to submit hours</li>
                </li>

                <li>
                    <b data-aos="fade-left" className="event-name"><a className="event" href="https://www.bemyeyes.com/" target="_blank">Be My Eyes</a> (Indefinite)</b>
                    <li className="event-info" data-aos="fade-left">A good chunk of people have vision problems and would gladly need the extra help</li>
                    <li className="event-info" data-aos="fade-right">You will get in a video call assisting the visually impaired with everyday tasks</li>
                    <li className="event-info" data-aos="fade-left"><a href="https://apps.apple.com/us/app/be-my-eyes/id905177575?pt=15492800&ct=BeMyEyesWebsite&mt=8" target="_blank">App Store</a></li>
                    <li className="event-info" data-aos="fade-right"><a href="https://play.google.com/store/apps/details?id=com.bemyeyes.bemyeyes" target="_blank">Google Play</a></li>
                </li>
            </ul> 

            <h2 data-aos="zoom-in-right" id="error-title">See an error with the site? 🫡</h2>
            <p data-aos="zoom-in-right" id="error-paragraph">I had a lot of fun coding this website!1! However, mistakes are bound to occur. 
            Free feel to contribute 🫵 to it by letting me (Leon Truong) know or by making a <a href="https://github.com/truongmleon/National-Honors-Society-Site" target="_blank">pull request</a>. 
            This is an open source project under the <a href="https://github.com/truongmleon/National-Honors-Society-Site/blob/main/LICENSE" target="_blank">MIT License</a>!</p>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Service;