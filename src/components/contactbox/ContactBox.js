import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import ContactBoxAvatar from "./ContactBoxAvatar";
import ContactBoxUpper from "./ContactBoxUpper";
import ContactBoxLower from "./ContactBoxLower";

function ContactBox() {
  const [btnToggle, setBtnToggle] = useState(false);

  return (
    <div className={"sidebar box sticky-column " + [btnToggle ? "pb-0" :""]} style={{ zIndex: 1 }}>
      <ContactBoxAvatar />
      <ContactBoxUpper />
      <button onClick={() => setBtnToggle(!btnToggle)} className="btn btn--blue-gradient btnContactInfo d-block d-xl-none">
        <FontAwesomeIcon icon={!btnToggle ? faAngleDoubleDown : faAngleDoubleUp} />
      </button>
      <ContactBoxLower btnToggle={btnToggle} />
    </div>
  );
}
export default ContactBox;