import React from "react";
import MenuItem from "./MenuItem";

function MenuItems(data) {
    return (
        <div className={"inner-menu js-menu " + [data.menuToggle ? "is-active" : ""]}>
            <ul className="nav">
                <MenuItem to="/" title="About" />
                <MenuItem to="/resume/" title="Resume" />
                <MenuItem to="/portfolio/" title="Portfolio" />
            </ul>
        </div>
    );
}

export default MenuItems;