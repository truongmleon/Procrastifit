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
            <br />
            <br />
            <article id="blog">
                <section className="blog-section">
                    <h2 data-aos="flip-left" className="blog-title blog-link"><a href="https://www.youtube.com/watch?v=PVv1n0GDN_w" target="_blank">Next Meeting October 19th!</a></h2>
                    <ul className="blog-paragraph">
                        <li data-aos="fade-up">Join us as we elect for our 3rd NHS Officer</li>
                        <li data-aos="fade-up">As always, snacks are provided at every meeting</li>
                        <li data-aos="fade-up">Slides will contain our first service events</li>
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