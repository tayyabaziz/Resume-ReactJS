import React from "react";
import SocialLink from "./SocialLink";

function ContactBoxSocial(data) {
  return (
    <React.Fragment>
      {/* Social */}
      <div className="social">
        {data.socialLinks && data.socialLinks.map((element, key) => {
          return (<SocialLink key={key} social_link={element.link} social_icon={element.icon} social_name={element.name} />);
        })}
      </div>
    </React.Fragment>
  );
}
export default ContactBoxSocial;