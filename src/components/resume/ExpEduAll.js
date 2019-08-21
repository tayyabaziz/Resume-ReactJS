import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Achievement from "./Achievement";

function ExpEduAll(data) {
    return (
        <React.Fragment>
            {/* Experience*/}
            <div className="pb-0">
                <div className="row">
                    <Education educations={data.educations} />
                    <Experience experiences={data.experiences} />
                    <Achievement achievements={data.achievements} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default ExpEduAll;