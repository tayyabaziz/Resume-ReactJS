import React from 'react';
import CaseItem from './CaseItem'
import icon_design from "../assets/icons/icon-design.svg";
import icon_dev from "../assets/icons/icon-dev.svg";
import icon_app from "../assets/icons/icon-app.svg";
import icon_photo from "../assets/icons/icon-photo.svg";

function Cases(data) {
    return (
        <React.Fragment>
            {/*What*/}
            <div className="box-inner pb-0">
                <h2 className="title title--h3">What I'm Doing</h2>
                <div className="row">
                    <CaseItem icon={icon_dev} title="PHP Development" ccaption="The most modern and high-quality design made at a professional level." />
                    <CaseItem icon={icon_dev} title="NodeJS Development" ccaption="The most modern and high-quality design made at a professional level." />
                    <CaseItem icon={icon_dev} title="API Development" ccaption="The most modern and high-quality design made at a professional level." />
                    <CaseItem icon={icon_dev} title="ReactJS Development" ccaption="The most modern and high-quality design made at a professional level." />
                    <CaseItem icon={icon_dev} title="Wordpress" ccaption="The most modern and high-quality design made at a professional level." />
                </div>
            </div>
        </React.Fragment>
    );
}


export default Cases;