import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const dates = ["September 28th, 2023", "October 16th, 2023", "September 12th, 2023", "September 18th, 2023", "October 2nd, 2023", "October 30th, 2023", "November 13th, 2023", "November 27th, 2023", "December 4th, 2023", "January 8th, 2024", "January 29th, 2024", "February 26th, 2024", "March 18th, 2024", "April 1st, 2024", "April 15th, 2024", "April 29th, 2024", "May 20th, 2024"];
const slides = [
    "/src/files/1st.pdf",
];
const docs = [
    "/src/files/service.pdf"
]

let meetingLinks: React.ReactElement<any, string | React.JSXElementConstructor<any>> | JSX.Element[] = [];

for (let i = 0; i < slides.length; i++) {
    meetingLinks.push(<li data-aos="zoom-in-down"><a href={slides[i]} target="_blank">{dates[i]}</a></li>);
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
                <li>A meeting consists of slides with service opportunities, quick announcements, in-school service activities, and more!</li>
            </ul>
            <div id="btn-grid">
            <a href="https://forms.office.com/r/RuciMK1Y87" target="_blank"><button>Membership Form</button></a>
            <a href="https://forms.office.com/r/EdrZ3XPLJ5" target="_blank"><button>Hour Submission Form</button></a>
            <a href={docs[0]} download="service.pdf" target="_blank"><button>Community Service Sheet</button></a>
            <a href="" target="_blank"><button>Missed Meeting Form</button></a>
            <a href="" target="_blank"><button>Election Interest Slides</button></a>
            <a href="" target="_blank"><button>DCON Info</button></a>
            </div>
            <h2 id="slides" className="note">Meeting slides..</h2>
            <ul id="links">
                {meetingLinks}
            </ul>
            <h3 data-aos="zoom-in-down" id="values">~Caring–Our Way of Life</h3>
            <br />
            <br />
            <br />
            <br />
            <br />
            
        </div>
    )
}

export default Resources;