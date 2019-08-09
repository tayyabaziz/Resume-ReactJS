import React from "react";
import ExpEduItem from "./ExpEduItem";
import iconExperience from "../assets/icons/icon-experience.svg";

function Experience() {
    return (
        <div className="col-12 mt-2">
            <h2 className="title title--h3"><img className="title-icon" src={iconExperience} alt="" /> EXPERIENCE <hr /></h2>
            <div className="col-12">
                <div className="timeline">
                    <ExpEduItem title="PHP Developer @ Tech Works (Pvt.) Ltd, (Eat Mubarak), Karachi (Pakistan)" period="Aug 16 2018 - present" description={<ul><li>Developed and maintaining Rider Portal with Live Tracking of riders using CodeIgniter PHP Framework and REST Service.</li></ul>} />
                    <ExpEduItem title="Web Developer @ Harley Willington, Karachi (Pakistan)" period="Apr 09 2018 - Aug 15 2018" description={<ul><li>Successfully designed and developed Harley Willington’s Company web profile</li><li>Developed Online Booking Portal for Airmen Golf Club &amp; Recreational Park and linked it with wordpress and also maintaining wordpress website.</li></ul>} />
                    <ExpEduItem title="Full Stack Web Developer @ Viaduct Pvt. Ltd., Karachi (Pakistan)" period="Jan 09 2015 - Apr 07 2018" description={<ul><li>Successfully designed and developed web applications from back-end to the front-end and maintained e.g.<ul><li>Event Discovery and Ticketing portal</li><li>On-demand Courier System</li><li>E-commerce Systems</li><li>Business Case Management System for AMADEUS PAKISTAN.</li></ul></li><li>Successfully designed, developed and maintained android applications.</li><li>Managed IT department and provided support.</li></ul>} />
                    <ExpEduItem title="Associate Software Engineer @ Synergy Computers Pvt. Ltd., Karachi (Pakistan)" period="Mar 18 2014 - Jul 04 2014" description={<ul><li>Created automated printing service for Agha Khan Hospital.</li><li>Created integration utility that related data from Infor EAM databases to another tables</li></ul>} />
                </div>
            </div>
        </div>
    );
}

export default Experience;