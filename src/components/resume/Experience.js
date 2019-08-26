import React from "react";
import ExpEduItem from "./ExpEduItem";

function Experience(data) {
    return (
        <div className="col-12 mt-2">
            <h2 className="title title--h3"><i className="fa fa-briefcase" /> EXPERIENCE <hr /></h2>
            <div className="col-12">
                <div className="timeline">
                    {data.experiences && data.experiences.sort((a, b) => a.priority > b.priority).map((element, key) => {
                        return (<ExpEduItem key={key} title={[element.title, ", ", element.employer, ", ", element.location]} period={element.period} description={element.details}/>);
                    })}
                </div>
            </div>
        </div>
    );
}
export default Experience;