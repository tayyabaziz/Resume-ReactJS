import React from "react";
import ContactBlock from "./ContactBlock";

function ContactBoxCB(data) {
  return (
    <ul className="contacts-block">
        {data.contactBlockDetails && data.contactBlockDetails.map((element, key) => {
          return (<ContactBlock key={key} contact_title={element.title} contact_icon={element.icon} contact_text={element.text} contact_link={element.link} />);
        })}
      </ul>
  );
}
export default ContactBoxCB;