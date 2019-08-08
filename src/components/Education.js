import React from 'react';
import ExpEduItem from './ExpEduItem';
import icon_education from '../assets/icons/icon-education.svg';

function Education() {
    return (
        <div className="col-12 col-lg-6">
            <h2 className="title title--h3"><img className="title-icon" src={icon_education} alt="" /> Education</h2>
            <div className="timeline">
                <ExpEduItem title="University School of the Arts" period="2007 — 2009" description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur." />
                <ExpEduItem title="University School of the Arts" period="2007 — 2009" description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur." />
                <ExpEduItem title="University School of the Arts" period="2007 — 2009" description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur." />
            </div>
        </div>
    );
}

export default Education;