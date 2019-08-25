import React from "react";
import { NavLink } from "react-router-dom";

function MenuItem(data) {
    return (
        <li className="nav__item">
            <NavLink exact to={data.to} activeClassName="active">{data.title}</NavLink>
        </li>
    );
}


export default MenuItem;