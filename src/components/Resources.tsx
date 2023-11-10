import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import servicepaper from "/src/files/service.pdf";
import one from "/src/files/1st.pdf";
import two from  "/src/files/2nd.pdf";
import three from "/src/files/3rd.pdf";

const dates = ["September 28th, 2023", "October 19th, 2023", "November 9th, 2023"];
const slides = [
    one,
    two,
    three
];

let meetingLinks: React.ReactElement<any, string | React.JSXElementConstructor<any>> | JSX.Element[] = [];

for (let i = 0; i < slides.length; i++) {
    meetingLinks.push(<li data-aos="zoom-in-down"><a download href={slides[i]} target="_blank">{dates[i]}</a></li>);
}

const Resources = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div id='resources-page'>
            <h1 id="resources-title">Looking for something?</h1>
            <h2 className="note">Some quick things to note..</h2>
            <ul id="note-list">
                <li>Meetings held in Mrs. Berry's 📚 room (160) after-school on <b>selected</b> Thursdays</li>
                <li>Members are required to complete <u>10 hours</u> per semester to stay as a member of NHS 👀</li>
                <li>Are you a senior? Complete <u>40 hours</u> in your NHS career for an NHS Cord 🤩 (<u>30 hours</u> if this is your first year)</li>
                <li>Email Leon if you would like to know your hours (I have 2021-2022 & 2022-2023 hours too)</li>
                <li>As an NHS member, you must maintain a 3.0+ over the school year ⭐</li>
                <li>A meeting consists of slides with service opportunities, quick announcements, in-school service activities, and more!</li>
            </ul>
            <div id="btn-grid">
            <a href="https://forms.office.com/r/EZcyyet9hw" target="_blank"><button>Membership Form</button></a>
            <a href="https://forms.office.com/r/EdrZ3XPLJ5" target="_blank"><button>Hour Submission Form</button></a>
            <a href={servicepaper} download target="_blank"><button>Community Service Sheet</button></a>
            <a href="https://forms.office.com/r/0pknGeFxec" target="_blank"><button>Officer Interest Form</button></a>
            </div>
            <h2 id="slides" className="note">Meeting slides..</h2>
            <ul id="links">
                {meetingLinks}
            </ul>
            <h3 data-aos="zoom-in-down" id="values">"Whether your school’s student leadership is flourishing, emerging, or somewhere in-between, NHS is for you."</h3>
            <br />
            <br />
            <br />
            <br />
            <br />
            
        </div>
    )
}

export default Resources;