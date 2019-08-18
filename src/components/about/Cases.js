import React from "react";
import CaseItem from "./CaseItem"
import iconDev from "../../assets/icons/icon-dev.svg";

function Cases(data) {
    return (
        <React.Fragment>
            {/*What*/}
            <div className="box-inner pb-0">
                <h2 className="title title--h3">What I'm Doing</h2>
                <div className="row">
                    <CaseItem icon={iconDev} title="PHP Development" caption="Dynamic web application development using frameworks like Laravel, and Codeigniter or Core PHP." />
                    <CaseItem icon={iconDev} title="NodeJS Development" caption="Dynamic web application development using NodeJS and ExpressJS." />
                    <CaseItem icon={iconDev} title="RestAPI Development" caption="RestAPI development using NodeJS or PHP frameworks." />
                    <CaseItem icon={iconDev} title="ReactJS Development" caption="Development of web applications front end using ReactJS." />
                    <CaseItem icon={iconDev} title="Wordpress" caption="Development and installation of web application using wordpress." />
                    <CaseItem icon={iconDev} title="Database Development" caption="Creation and maintenance of databases like MySQL, MariaDB, MongoDB, and PostgreSQL." />
                </div>
            </div>
        </React.Fragment>
    );
}


export default Cases;