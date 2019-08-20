import React from "react";
import ContactBoxCB from "./ContactBoxCB";
import ContactBoxResume from "./ContactBoxResume";
import Collapse from '@kunukn/react-collapse';

function ContactBoxLower(data) {
  return (
    <Collapse isOpen={data.btnToggle} transition="height 300ms cubic-bezier(.4, 0, .2, 1)" aria-hidden={data.btnToggle ? 'false' : 'true'}>
      <div className={"sidebar__info box-inner box-inner--rounded d-xl-block contactInfo " + [data.btnToggle ? "open" : ""]}>
        <ContactBoxCB />
        <ContactBoxResume />
      </div>
    </Collapse>
  );
}
export default ContactBoxLower;