import React from "react";
import ReactHtmlParser from "react-html-parser";

function ExpEduItem(data) {
    return (
        <article className="timeline__item">
            <div className="row">
                <div className="col-8">
                    <h5 className="title title--h5 timeline__title float-left">{data.title}</h5>
                </div>
                <div className="col-4">
                    <span className="timeline__period float-right">{data.period}</span>
                </div>
                {data.description ? <div className="timeline__description col">{ReactHtmlParser(data.description)}</div>:""}
            </div>
        </article>
    );
}

export default ExpEduItem;