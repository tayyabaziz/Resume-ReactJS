import React, { useState } from "react";
import CircleMenu from "./CircleMenu";
import MenuItems from "./MenuItems";

function Menu() {
    const [menuToggle, setMenuToggle] = useState(false);
    return (
        <React.Fragment>
            <CircleMenu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
            <MenuItems menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
        </React.Fragment >
    );
}
export default Menu;