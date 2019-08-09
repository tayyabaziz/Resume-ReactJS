import React from "react";

function ContactBlock (data) {
  if (data.contact_link) {
    return (
      <li className="contacts-block__item" data-toggle="tooltip" data-placement="top" title={data.contact_title}>
        <a href={data.contact_link}><i className={data.contact_icon}></i>{data.contact_text}</a>
      </li>
    );
  }
  else {
    return (
      <li className="contacts-block__item" data-toggle="tooltip" data-placement="top" title={data.contact_title}>
        <i className={data.contact_icon}></i>{data.contact_text}
      </li>
    );
  }
}

export default ContactBlock;