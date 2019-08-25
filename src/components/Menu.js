import React, { useState, useEffect } from "react";
import CircleMenu from "./CircleMenu";
import MenuItems from "./MenuItems";

function Menu() {
    const [menuToggle, setMenuToggle] = useState(false);
    useEffect(() => {
        if (menuToggle) {
            document.querySelector("body").classList.add("open-menu");
        }
        else {
            document.querySelector("body").classList.remove("open-menu");
        }
    });
    return (
        <React.Fragment>
            <CircleMenu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
            <MenuItems menuToggle={menuToggle} />
        </React.Fragment >
    );
}
export default Menu;