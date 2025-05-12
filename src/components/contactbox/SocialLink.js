import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

function SocialLink(data) {
  return (
    <OverlayTrigger placement="top" overlay={<Tooltip>  {data.social_name}</Tooltip>}>
      <a target="_blank" rel="noopener noreferrer" className="social__link" href={data.social_link} aria-label={data.social_link}><i className={data.social_icon}></i></a>
    </OverlayTrigger>
  );
}

export default SocialLink;