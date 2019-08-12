import React from "react";
import MenuItem from "./MenuItem";

function MenuItems() {
    return (
        <div className="inner-menu js-menu">
            <ul className="nav">
                <MenuItem to="/" title="About" />
                <MenuItem to="/resume/" title="Resume" />
                <MenuItem to="/portfolio/" title="Portfolio" />
            </ul>
        </div>
    );
}

export default MenuItems;