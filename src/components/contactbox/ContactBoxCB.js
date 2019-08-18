import React from "react";
import ContactBlock from "./ContactBlock";

function ContactBoxCB() {
  return (
    <ul className="contacts-block">
        <ContactBlock contact_title="Birthday" contact_icon="font-icon icon-calendar" contact_text="April 8, 1990" />
        <ContactBlock contact_title="Address" contact_icon="font-icon icon-location" contact_text="B-98/1 Central Government Housing Society, Block 10-A, Gulshan-e-Iqbal, 75300 Karachi (Pakistan)" />
        <ContactBlock contact_title="E-mail" contact_link="mailto:tayyabaziz5@gmail.com" contact_icon="font-icon icon-envelope" contact_text="tayyabaziz5@gmail.com" />
        <ContactBlock contact_title="Phone" contact_link="tel:+92 (336) 3752318" contact_icon="font-icon icon-phone" contact_text="+92 (336) 3752318" />
        <ContactBlock contact_title="Skype" contact_link="skype:tayyab-aziz" contact_icon="font-icon icon-skype" contact_text="tayyab-aziz" />
        <ContactBlock contact_title="Interest" contact_icon="font-icon icon-smile" contact_text="Game Development, Game Designing, and Web Development (PHP and Wordpress)" />
      </ul>
  );
}
export default ContactBoxCB;