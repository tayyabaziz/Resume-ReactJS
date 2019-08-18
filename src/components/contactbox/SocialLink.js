import React from "react";

function SocialLink (data) {
  return (
    <a target="_blank" rel="noopener noreferrer" className="social__link" href={data.social_link}><i className={data.social_icon}></i></a>
  );
}

export default SocialLink;