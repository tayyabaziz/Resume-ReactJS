import React from "react";
import Placeholder from "../Placeholder";

function ContactBoxPlaceholderUpper() {
    const socialLinks = [];
    for (let index = 0; index < 4; index++) {
        socialLinks.push(
            <Placeholder key={index} className="social__link" style={{ height: "22px", width: "22px" }} />
        );
    }
    return (
        <div className="text-center">
            <h3 className="title title--h3 sidebar__user-name">
                <Placeholder style={{ height: "31.2px" }} />
            </h3>
            <Placeholder className="badge badge--gray" style={{ height: "30px", padding: "0" }} />
            {/* Social */}
            <div className="social">
                {socialLinks}
            </div>
        </div>
    );
}
export default ContactBoxPlaceholderUpper;