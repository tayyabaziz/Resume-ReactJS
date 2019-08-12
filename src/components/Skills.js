import React, { useEffect } from "react";
import Progress from "./Progress";

function Skills(data) {
    useEffect(() => {
        onLoadProgress()
    }, []);
    function onLoadProgress() {
        document.querySelectorAll(".progress-bar").forEach(element => {
            element.setAttribute("style", `width: ${element.getAttribute("aria-valuenow")}%; z-index:2;`);
        });
    }
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
                            <Progress progress_value="70" progress_text="PHP - 5 years experience" />
                            <Progress progress_value="65" progress_text="Wordpress - 4 years experience" />
                            <Progress progress_value="25" progress_text="Photoshop - 1 year experience" />
                            <Progress progress_value="90" progress_text="HTML/CSS - 5 years experience" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-2  mt-lg-0">
                        <div className="box box__second">
                            <Progress progress_value="70" progress_text="JavaScript - 5 years experience" />
                            <Progress progress_value="40" progress_text="NodeJS - less than a year experience" />
                            <Progress progress_value="85" progress_text="jQuery/AJAX - 5 years experience" />
                            <Progress progress_value="35" progress_text="Android - 1 year experience" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Skills;