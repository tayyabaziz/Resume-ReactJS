import React from 'react';

function ExpEduItem(data) {
    let desc = "";
    if (data.description) {
        desc = <p className="timeline__description">{data.description}</p>;
    }
    return (
        <article className="timeline__item">
            <h5 className="title title--h5 timeline__title">{data.title}</h5>
            <span className="timeline__period">{data.period}</span>
            {desc}
        </article>
    );
}

export default ExpEduItem;