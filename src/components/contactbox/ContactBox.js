import React, { useState } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import ContactBoxAvatar from "./ContactBoxAvatar";
import ContactBoxUpper from "./ContactBoxUpper";
import ContactBoxLower from "./ContactBoxLower";
import ContactBoxResume from "./ContactBoxResume";

function ContactBox(data) {
  const [btnToggle, setBtnToggle] = useState(false);
  const { title, badge, profileImage, resumeFile, socialLinks, contactBlockDetails } = data.contactData;
  return (
    <div className={"sidebar box sticky-column " + [data.isSmall ? [btnToggle ? "pb-0" : ""] : "pb-0"]} style={{ zIndex: 1 }}>
      <ContactBoxAvatar profileImage={profileImage} />
      <ContactBoxUpper title={title} badge={badge} socialLinks={socialLinks} />
      <OverlayTrigger placement="top" overlay={<Tooltip>{!btnToggle ? "Show More Information" : "Hide More Information"} </Tooltip>}>
        <button aria-label="Download Resume" onClick={() => setBtnToggle(!btnToggle)} className="btn btn--blue-gradient btnContactInfo d-block d-xl-none" >
          <FontAwesomeIcon icon={!btnToggle ? faAngleDoubleDown : faAngleDoubleUp} />
        </button>
      </OverlayTrigger>
      {(data.isSmall && !btnToggle) ? <ContactBoxResume resumeFile={resumeFile} btnToggle={btnToggle} isSmall={data.isSmall} /> : ""}
      <ContactBoxLower resumeFile={resumeFile} contactBlockDetails={contactBlockDetails} btnToggle={btnToggle} isSmall={data.isSmall} />
    </div>
  );
}
export default ContactBox;