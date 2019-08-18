import React from "react";
import Placeholder from "../Placeholder";

function ContactBoxPlaceholderUpper() {
    return (
        <div className="text-center">
                <h3 className="title title--h3 sidebar__user-name">
                    <Placeholder style={{ height: "31.2px", width: "100%" }} />
                </h3>
                <Placeholder className="badge badge--gray" style={{ height: "30px", width: "100%", padding: "0" }} />
                {/* Social */}
                <div className="social">
                    <Placeholder className="social__link" style={{ height: "22px", width: "22px", padding: "0" }} />
                    <Placeholder className="social__link" style={{ height: "22px", width: "22px", padding: "0" }} />
                    <Placeholder className="social__link" style={{ height: "22px", width: "22px", padding: "0" }} />
                    <Placeholder className="social__link" style={{ height: "22px", width: "22px", padding: "0" }} />
                    <Placeholder className="social__link" style={{ height: "22px", width: "22px", padding: "0" }} />
                </div>
            </div>
    );
}
export default ContactBoxPlaceholderUpper;