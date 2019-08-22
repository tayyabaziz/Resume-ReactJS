import React, { useEffect } from "react";
import Progress from "./Progress";

function Skills(data) {
    function onLoadProgress() {
        document.querySelectorAll(".progress-bar").forEach((element) => {
            element.setAttribute("style", `width: ${element.getAttribute("aria-valuenow")}%; z-index:2;`);
        });
    }
    useEffect(() => {
        onLoadProgress();
    }, []);

    const skills1 = [];
    const skills2 = [];

    data.skills.sort((a, b) => a.priority > b.priority).map((element, key) => {
        if (key < Math.ceil(data.skills.length / 2)) {
            return skills1.push(<Progress key={key} progress_value={element.percent} progress_text={element.title + " - " + element.experience} />);
        }
        else {
            return skills2.push(<Progress key={key} progress_value={element.percent} progress_text={element.title + " - " + element.experience} />);
        }
    });
    return (
        <React.Fragment>
            {/* Skills*/}
            <div className="box-inner box-inner--rounded">
                <div className="row">
                    <div className="col-12">
                        <h2 className="title title--h3">Skills</h2>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="box box__second">
                            {skills1}
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-2  mt-lg-0">
                        <div className="box box__second">
                            {skills2}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Skills;