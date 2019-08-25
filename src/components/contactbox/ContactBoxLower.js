import React from "react";
import Collapse from "@kunukn/react-collapse";
import ContactBoxCB from "./ContactBoxCB";
import ContactBoxResume from "./ContactBoxResume";

function ContactBoxLower(data) {
  return (
    data.isSmall ?
      <Collapse className="collapse-css-transition" isOpen={data.btnToggle} transition="height 300ms cubic-bezier(.4, 0, .2, 1)" aria-hidden={data.btnToggle ? "false" : "true"}>
        <div className={"sidebar__info box-inner box-inner--rounded d-xl-block contactInfo " + [data.btnToggle ? "open" : ""]}>
          <ContactBoxCB contactBlockDetails={data.contactBlockDetails} />
          <ContactBoxResume resumeFile={data.resumeFile} isSmall={data.isSmall} btnToggle={data.btnToggle} />
        </div>
      </Collapse> :
      <Collapse className="collapse-css-transition-keep" isOpen={true} transition="height 300ms cubic-bezier(.4, 0, .2, 1)" >
        <div className="sidebar__info box-inner box-inner--rounded d-xl-block contactInfo open">
          <ContactBoxCB contactBlockDetails={data.contactBlockDetails} />
          <ContactBoxResume resumeFile={data.resumeFile} isSmall={data.isSmall} btnToggle={data.btnToggle} />
        </div>
      </Collapse>
  );
}
export default ContactBoxLower;