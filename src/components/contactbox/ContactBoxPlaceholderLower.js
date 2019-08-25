import React from "react";
import Collapse from "@kunukn/react-collapse";
import ContactBoxCBPlaceholder from "./ContactBoxCBPlaceholder";
import ContactBoxResumePlaceholder from "./ContactBoxResumePlaceholder";

function ContactBoxPlaceholderLower(data) {
    return (
        data.isSmall ?
            <Collapse className="collapse-css-transition" isOpen={data.btnToggle} transition="height 300ms cubic-bezier(.4, 0, .2, 1)" aria-hidden={data.btnToggle ? "false" : "true"}>
                <div className={"sidebar__info box-inner box-inner--rounded d-xl-block contactInfo " + [data.btnToggle ? "open" : ""]}>
                    <ContactBoxCBPlaceholder />
                    <ContactBoxResumePlaceholder isSmall={data.isSmall} btnToggle={data.btnToggle} />
                </div>
            </Collapse> :
            <Collapse className="collapse-css-transition-keep" isOpen={true} transition="height 300ms cubic-bezier(.4, 0, .2, 1)" >
                <div className="sidebar__info box-inner box-inner--rounded d-xl-block contactInfo open">
                    <ContactBoxCBPlaceholder />
                    <ContactBoxResumePlaceholder isSmall={data.isSmall} btnToggle={data.btnToggle} />
                </div>
            </Collapse>
    );
}
export default ContactBoxPlaceholderLower;