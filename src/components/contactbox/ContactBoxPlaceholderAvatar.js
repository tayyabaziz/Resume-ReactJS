import React from "react";
import Placeholder from "../Placeholder";

function ContactBoxPlaceholderAvatar() {
    return (
        <svg className="avatar avatar--180" viewBox="0 0 188 188">
            <g className="avatar__box">
                <Placeholder style={{ height: "100%", width: "100%" }} />
            </g>
        </svg>
    );
}
export default ContactBoxPlaceholderAvatar;