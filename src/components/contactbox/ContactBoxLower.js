import React from "react";
import ContactBoxCB from "./ContactBoxCB";
import ContactBoxResume from "./ContactBoxResume";

function ContactBoxLower() {
  return (
    <div className="sidebar__info box-inner box-inner--rounded pb-0">
      <ContactBoxCB/>
      <ContactBoxResume />
    </div>

  );
}
export default ContactBoxLower;