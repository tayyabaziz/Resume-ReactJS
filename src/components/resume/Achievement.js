import React from "react";
import ExpEduItem from "./ExpEduItem";

function Achievement(data) {
    return (
        <div className="col-12 mt-2">
            <h2 className="title title--h3"><i className="fa fa-trophy" /> ACHIEVEMENT <hr /></h2>
            <div className="col-12">
                <div className="timeline">
                    {data.achievements && data.achievements.sort((a, b) => a.priority > b.priority).map((element, key) => {
                        return (<ExpEduItem key={key} title={[element.title, ", ", element.from, ", ", element.location]} period={element.period} description={element.details} />);
                    })}
                </div>
            </div>
        </div>
    );
}
export default Achievement;