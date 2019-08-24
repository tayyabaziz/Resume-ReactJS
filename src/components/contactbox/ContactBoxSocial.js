import React from "react";
import SocialLink from "./SocialLink";

function ContactBoxSocial() {
  return (
    <React.Fragment>
      {/* Social */}
      <div className="social">
        <SocialLink social_link="https://www.github.com/tayyabaziz/" social_icon="font-icon icon-github" social_name="Github" />
        <SocialLink social_link="https://www.linkedin.com/in/tayyabaziz/" social_icon="font-icon icon-linkedin2" social_name="LinkedIn" />
        <SocialLink social_link="https://www.twitter.com/tayyabaziz" social_icon="font-icon icon-twitter" social_name="Twitter" />
        <SocialLink social_link="https://www.facebook.com/tayyab2318" social_icon="font-icon icon-facebook" social_name="Facebook" />
      </div>
    </React.Fragment>
  );
}
export default ContactBoxSocial;