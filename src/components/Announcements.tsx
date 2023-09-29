import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import dcm from "/src/assets/summerdcm.png"
import days from "/src/assets/kcdays.mp4"

const Announcements = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div id="announcements-page">
            <h1 id="announcements-title">View the Instagram!🫶</h1>
            <h2 id="disclaimer">May not work under KSD internet :(</h2>

            <div data-aos="fade-down" className="flex">
            <h1 onClick={() => window.open("https://www.remind.com/join/kentwoodkc")} id="remind-title">Join Remind: text @kentwoodkc to 81010</h1>
            </div>
            <br />
            <br />
            <article id="blog">
                <section className="blog-section">
                    <h2 data-aos="zoom-in" className="blog-title">District Project for 2023-2024</h2>
                   
                    <p data-aos="fade-down" className="blog-paragraph">
                    The District Project Committee is excited to announce the new District Project for the 2023-2024 service year - Youth Houselessness.
                    </p>

                    <p data-aos="fade-down" className="blog-paragraph">
                    They have developed the SEAD Initiative, which is an acronym for Support, Empower, Act, and Destigmatize.
                    </p>

                    <p data-aos="fade-down" className="blog-paragraph">
                    Youth Houselessness is an extremely prevalent and tangible issue within the PNW. According to the Washington State Department of Commerce, there are approximately 13,000 unaccompanied youth and young adults in Washington State.
                    </p>

                    <p data-aos="fade-down" className="blog-paragraph">
                    This year, we hope to serve 50,000 hours and donate $15,000 to help end youth houselessness. As Key Clubbers, we can make an impact by organizing food drives, creating packages of basic necessities, and fundraising for local organizations.  
                    </p> 
                </section>

                <section className="blog-section">
                    <h2 data-aos="flip-left" className="blog-title blog-link"><a href="https://docs.google.com/forms/d/e/1FAIpQLSeLtVfLlupCaQQI7oXE1X7pd0teirT0HPvZH6RL6YI3IhUBMg/viewform" target="_blank">D32 & D32 Summer DCM</a></h2>
                    <ul className="blog-paragraph">
                        <li data-aos="fade-up">Wrapping up hygiene kit drive by creating hygiene kits</li>
                        <li data-aos="fade-up">Water balloon and water gun fight at the end</li>
                        <li data-aos="fade-up">1PM-3PM, Saturday July 29th @ Lake Meridian</li>
                    </ul>
                    <img data-aos="flip-up" className="blog-img" src={dcm} alt="summerdcm promo" />
                </section>

                <section className="blog-section">
                    <h2 data-aos="zoom-in" className="blog-title blog-link"><a href="https://pnwkeyclub.org/shop/key-club-day-north-2023/" target="_blank">Key Club Days North</a></h2>
                    <ul className="blog-paragraph">
                        <li data-aos="fade-up">FREE Key Club Days kick-off event will be available to you the night prior to event with high-quality workshops</li>
                        <li data-aos="fade-up">In-person participants receive: lunch, all-day admission (until 6 PM) to Wild Waves, team-building activities by LTG, + a service project</li>
                        <li data-aos="fade-up">Registration open until 08/25/2023 ($55)</li>
                        <li data-aos="fade-up">12PM-2PM, Saturday September 9th @ Wild Waves</li>
                    </ul>
                    <video data-aos="flip-down" className="blog-img" width="400" controls>
                    <source src={days} type="video/mp4"/>
                    </video>
                </section>

                <section className="blog-section">
                    <h2 data-aos="flip-left" className="blog-title blog-link"><a href="https://www.google.com/" target="_blank">TBA</a></h2>
                    <ul className="blog-paragraph">

                    </ul>
                </section>
            </article>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Announcements;