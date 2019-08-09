import React from "react";

function ExpEduItem(data) {
    let desc = "";
    if (data.description) {
        desc = <div className="timeline__description col">{data.description}</div>;
    }
    return (
        <article className="timeline__item">
            <div className="row">
                <div className="col-8">
                    <h5 className="title title--h5 timeline__title float-left">{data.title}</h5>
                </div>
                <div className="col-4">
                    <span className="timeline__period float-right">{data.period}</span>
                </div>
                {desc}
            </div>
        </article>
    );
}

export default ExpEduItem;