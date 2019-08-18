import React from "react";
import ExpEduItem from "./ExpEduItem";
import iconAchievement from "../../assets/icons/icon-achievement.svg";

function Achievement() {
    return (
        <div className="col-12 mt-2">
            <h2 className="title title--h3"><img className="title-icon" src={iconAchievement} alt="" /> ACHIEVEMENT <hr /></h2>
            <div className="col-12">
                <div className="timeline">
                    <ExpEduItem title="Diploma in Web Development | Shaw Academy, E-Learning" period="Oct 2017" description="Grade: Distinction, 89%" />
                    <ExpEduItem title="e-Competencia 2012 Programming Competition (Syntax-IT) | Iqra University, Karachi (Pakistan)" period="2012" description="2nd Position" />
                </div>
            </div>
        </div>
    );
}

export default Achievement;