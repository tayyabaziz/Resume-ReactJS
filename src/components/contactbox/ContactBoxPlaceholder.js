import React, { useState } from "react";
import ContactBoxPlaceholderAvatar from "./ContactBoxPlaceholderAvatar";
import ContactBoxPlaceholderUpper from "./ContactBoxPlaceholderUpper";
import ContactBoxPlaceholderLower from "./ContactBoxPlaceholderLower";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import ContactBoxResumePlaceholder from "./ContactBoxResumePlaceholder";

function ContactBoxPlaceholder(data) {
    const [btnToggle, setBtnToggle] = useState(false);
    return (
        <div className={"sidebar box sticky-column " + [data.isSmall ? [btnToggle ? "pb-0" : ""] : "pb-0"]} style={{ zIndex: 1 }}>
            <ContactBoxPlaceholderAvatar />
            <ContactBoxPlaceholderUpper />
            <OverlayTrigger placement="top" overlay={<Tooltip>{!btnToggle ? "Show More Information" : "Hide More Information"} </Tooltip>}>
                <button onClick={() => setBtnToggle(!btnToggle)} className="btn btn--blue-gradient btnContactInfo d-block d-xl-none" >
                    <FontAwesomeIcon icon={!btnToggle ? faAngleDoubleDown: faAngleDoubleUp} />
                </button>
            </OverlayTrigger>
            {(data.isSmall && !btnToggle) ? <ContactBoxResumePlaceholder btnToggle={btnToggle} isSmall={data.isSmall} /> : ""}
            <ContactBoxPlaceholderLower btnToggle={btnToggle} isSmall={data.isSmall}/>
        </div>
    );
}
export default ContactBoxPlaceholder;