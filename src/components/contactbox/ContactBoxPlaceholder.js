import React from "react";
import ContactBoxPlaceholderAvatar from "./ContactBoxPlaceholderAvatar";
import ContactBoxPlaceholderUpper from "./ContactBoxPlaceholderUpper";
import ContactBoxPlaceholderLower from "./ContactBoxPlaceholderLower";

function ContactBoxPlaceholder() {
    return (
        <div className="sidebar box pb-0 sticky-column">
            <ContactBoxPlaceholderAvatar />
            <ContactBoxPlaceholderUpper />
            <ContactBoxPlaceholderLower />
        </div>
    );
}
export default ContactBoxPlaceholder;