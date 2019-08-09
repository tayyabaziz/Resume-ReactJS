import React from "react";
import imageFile from "../file/profile-image.jpg";
import resumeFile from "../file/Tayyab Aziz Resume.pdf";
import SocialLink from "./SocialLink";
import ContactBlock from "./ContactBlock";

function ContactBox () {
  return (
    <div className="sidebar box pb-0 sticky-column">
      <svg className="avatar avatar--180" viewBox="0 0 188 188">
        <g className="avatar__box">
          <image href={imageFile} height="100%" width="100%" />
        </g>
      </svg>
      <div className="text-center">
        <h3 className="title title--h3 sidebar__user-name"><span className="weight--500">Tayyab</span> Aziz</h3>
        <div className="badge badge--gray">Full Stack Web Developer</div>

        {/* Social */}
        <div className="social">
          <SocialLink social_link="https://www.github.com/tayyabaziz/" social_icon="font-icon icon-github" />
          <SocialLink social_link="https://www.linkedin.com/in/tayyabaziz/" social_icon="font-icon icon-linkedin2" />
          <SocialLink social_link="https://www.twitter.com/tayyabaziz" social_icon="font-icon icon-twitter" />
          <SocialLink social_link="https://www.facebook.com/tayyab2318" social_icon="font-icon icon-facebook" />
        </div>
      </div>

      <div className="sidebar__info box-inner box-inner--rounded">
        <ul className="contacts-block">
          <ContactBlock contact_title="Birthday" contact_icon="font-icon icon-calendar" contact_text="April 8, 1990" />
          <ContactBlock contact_title="Address" contact_icon="font-icon icon-location" contact_text="B-98/1 Central Government Housing Society, Block 10-A, Gulshan-e-Iqbal, 75300 Karachi (Pakistan)" />
          <ContactBlock contact_title="E-mail" contact_link="mailto:tayyabaziz5@gmail.com" contact_icon="font-icon icon-envelope" contact_text="tayyabaziz5@gmail.com" />
          <ContactBlock contact_title="Phone" contact_link="tel:+92 (336) 3752318" contact_icon="font-icon icon-phone" contact_text="+92 (336) 3752318" />
          <ContactBlock contact_title="Skype" contact_link="skype:tayyab-aziz" contact_icon="font-icon icon-skype" contact_text="tayyab-aziz" />
          <ContactBlock contact_title="Interest" contact_icon="font-icon icon-smile" contact_text="Game Development, Game Designing, and Web Development (PHP and Wordpress)" />
        </ul>

        <a className="btn btn--blue-gradient" target="_blank" rel="noopener noreferrer" href={resumeFile}><i className="font-icon icon-download"></i> Download CV</a>
      </div>
    </div>
  );
}

export default ContactBox;