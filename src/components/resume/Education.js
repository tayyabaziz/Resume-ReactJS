import React from "react";
import ExpEduItem from "./ExpEduItem";

function Education(data) {
    return (
        <div className="col-12 mt-2">
            <h2 className="title title--h3"><i className="fa fa-graduation-cap" /> EDUCATION<hr /></h2>
            <div className="col-12">
                <div className="timeline">
                    {data.educations && data.educations.sort((a, b) => a.priority > b.priority).map((element, key) => {
                        return (<ExpEduItem key={key} title={[element.title, ", ", element.from, ", ", element.location]} period={element.period} />);
                    })}
                </div>
            </div>
        </div>
    );
}
export default Education;