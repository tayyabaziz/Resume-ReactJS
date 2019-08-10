import React from "react";
import { NavLink } from "react-router-dom";

function hashLinkScroll() {
    setTimeout(() => {
        //const element = document.getElementById("hash");
        //if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' }, 100);
    }, 0);
}

function MenuItem(data) {
    return (
        <li className="nav__item">
            <NavLink exact to={data.to} activeClassName="active" onClick={hashLinkScroll}>{data.title}</NavLink>
        </li>
    );
}


export default MenuItem;