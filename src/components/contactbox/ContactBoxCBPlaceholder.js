import React from "react";
import Placeholder from "../Placeholder";

function ContactBoxCBPlaceholder() {
  const contactBlocks = [];
  for (let index = 0; index < 7; index++) {
    contactBlocks.push(
      <li key={index} className="contacts-block__item" style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}>
        <Placeholder className="social__link" style={{ height: "24px", width: "100%" }} />
      </li>
    );
  }

  return (
    <ul className="contacts-block">
      {contactBlocks}
    </ul>
  );
}
export default ContactBoxCBPlaceholder;