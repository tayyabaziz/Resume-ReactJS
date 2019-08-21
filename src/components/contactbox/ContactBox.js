import React, { useEffect, useState } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import ContactBoxAvatar from "./ContactBoxAvatar";
import ContactBoxUpper from "./ContactBoxUpper";
import ContactBoxLower from "./ContactBoxLower";
import ContactBoxResume from "./ContactBoxResume";

function ContactBox() {
  const [btnToggle, setBtnToggle] = useState(false);
  const [isSmall, setIsSmall] = useState((window.innerWidth < 1200) ? true : false);
  useEffect(() => {
    var resizeTimer;
    function onResizeEvent() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        (window.innerWidth < 1200) ? setIsSmall(true) : setIsSmall(false);
      }, 50);
    }
    window.addEventListener("resize", onResizeEvent);
    return () => {
      document.removeEventListener("resize", onResizeEvent);
    };
  });

  return (
    <div className={"sidebar box sticky-column " + [isSmall ? [btnToggle ? "pb-0" : ""] : "pb-0"]} style={{ zIndex: 1 }}>
      <ContactBoxAvatar />
      <ContactBoxUpper />
      <OverlayTrigger placement="top" overlay={<Tooltip>   {!btnToggle ? "Show More Information" : "Hide More Information"} </Tooltip>}>
        <button onClick={() => setBtnToggle(!btnToggle)} className="btn btn--blue-gradient btnContactInfo d-block d-xl-none" >
          <FontAwesomeIcon icon={!btnToggle ? faAngleDoubleDown : faAngleDoubleUp} />
        </button>
      </OverlayTrigger>
      {isSmall && !btnToggle ? <ContactBoxResume btnToggle={btnToggle} isSmall={isSmall} /> : ""}
      <ContactBoxLower btnToggle={btnToggle} isSmall={isSmall} />
    </div>
  );
}
export default ContactBox;