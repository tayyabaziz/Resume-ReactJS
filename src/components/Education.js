import React from 'react';
import ExpEduItem from './ExpEduItem';
import icon_education from '../assets/icons/icon-education.svg';

function Education() {
    return (
        <div className="col-12 mt-2">
            <h2 className="title title--h3"><img className="title-icon" src={icon_education} alt="" /> EDUCATION<hr /></h2>
            <div className="timeline">
                <ExpEduItem title="Master of Science Computer Science | Bahria University, Karachi, Pakistan" period="2016 - 2018" />
                <ExpEduItem title="Bachelors of Science Computer Science | Iqra University, Karachi, Pakistan" period="2009 - 2013" />
                <ExpEduItem title="Intermediate in Pre Engineering | Government Degree Boys College, Gulzar-e-Hijri, Karachi (Pakistan)" period="2006 - 2008" />
                <ExpEduItem title="Matriculation in Computer Sciences | Usmania Academy, Karachi (Pakistan)" period="2004 - 2006" />
            </div>
        </div>
    );
}

export default Education;