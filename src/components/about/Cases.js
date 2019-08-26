import React from "react";
import CaseItem from "./CaseItem";

function Cases(data) {
    return (
        <React.Fragment>
            {/*What*/}
            <div className="box-inner pb-0">
                <h2 className="title title--h3">What I'm Doing</h2>
                <div className="row">
                    {data.cases && data.cases.map((element, key) => {
                        return (<CaseItem key={key} icon={element.icon} title={element.title} caption={element.description} />);
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}
export default Cases;