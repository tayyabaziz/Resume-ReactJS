import React from "react";
import { NavLink } from "react-router-dom";
const imageFile = "/images/profile-image.jpg";

function ContactBoxAvatar() {
  return (
    <svg className="avatar avatar--180" viewBox="0 0 188 188">
      <g className="avatar__box">
        <NavLink to="/">
          <image href={imageFile} height="100%" width="100%" />
        </NavLink>
      </g>
    </svg>
  );
}
export default ContactBoxAvatar;