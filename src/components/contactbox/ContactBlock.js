import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

function ContactBlock(data) {
  return (
    <OverlayTrigger placement="top" overlay={
      <Tooltip>
        {data.contact_title}
      </Tooltip>
    }>
      {data.contact_link ?
        <li className="contacts-block__item" title={data.contact_title}>
          <a href={data.contact_link}><i className={data.contact_icon}></i>{data.contact_text}</a>
        </li> :
        <li className="contacts-block__item" title={data.contact_title}>
          <i className={data.contact_icon}></i>{data.contact_text}
        </li>
      }
    </OverlayTrigger >

  );
}

export default ContactBlock;