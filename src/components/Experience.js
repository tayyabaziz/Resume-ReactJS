import React from 'react';
import ExpEduItem from './ExpEduItem';
import icon_experience from '../assets/icons/icon-experience.svg';

function Experience() {
    return (
        <div className="col-12 col-lg-6">
            <h2 className="title title--h3"><img className="title-icon" src={icon_experience} alt="" /> Experience</h2>
            <div className="timeline">
                <ExpEduItem title="University School of the Arts" period="2007 — 2009" description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur." />
                <ExpEduItem title="University School of the Arts" period="2007 — 2009" description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur." />
                <ExpEduItem title="University School of the Arts" period="2007 — 2009" description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur." />
            </div>
        </div>
    );
}

export default Experience;