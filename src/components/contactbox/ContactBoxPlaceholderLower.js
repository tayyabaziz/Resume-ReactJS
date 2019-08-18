import React from "react";
import Placeholder from "../Placeholder";

function ContactBoxPlaceholderLower() {
    return (
        <div className="sidebar__info box-inner box-inner--rounded">
                <ul className="contacts-block">
                    <li className="contacts-block__item" data-toggle="tooltip" data-placement="top">
                        <Placeholder className="social__link" style={{ height: "24px", width: "100%", padding: "0" }} />
                    </li>
                    <li className="contacts-block__item" data-toggle="tooltip" data-placement="top">
                        <Placeholder className="social__link" style={{ height: "24px", width: "100%", padding: "0" }} />
                    </li>
                    <li className="contacts-block__item" data-toggle="tooltip" data-placement="top">
                        <Placeholder className="social__link" style={{ height: "24px", width: "100%", padding: "0" }} />
                    </li>
                    <li className="contacts-block__item" data-toggle="tooltip" data-placement="top">
                        <Placeholder className="social__link" style={{ height: "24px", width: "100%", padding: "0" }} />
                    </li>
                    <li className="contacts-block__item" data-toggle="tooltip" data-placement="top">
                        <Placeholder className="social__link" style={{ height: "24px", width: "100%", padding: "0" }} />
                    </li>
                    <li className="contacts-block__item" data-toggle="tooltip" data-placement="top">
                        <Placeholder className="social__link" style={{ height: "24px", width: "100%", padding: "0" }} />
                    </li>
                    <li className="contacts-block__item" data-toggle="tooltip" data-placement="top">
                        <Placeholder className="social__link" style={{ height: "24px", width: "100%", padding: "0" }} />
                    </li>
                </ul>
                <Placeholder style={{ height: "46.4px", width: "12rem", padding: "0", borderRadius: "10rem" }} />
            </div>
    );
}
export default ContactBoxPlaceholderLower;