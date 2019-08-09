import React, { useEffect } from "react";
import Progress from "./Progress";

import $ from "jquery";
import ScrollMagic from "scrollmagic";

function Skills(data) {
    useEffect(() => {
        progressBar()
    });

    function progressBar() {
        $('.progress').each(function () {
            var ctrl = new ScrollMagic.Controller();
            new ScrollMagic.Scene({
                triggerElement: '.progress',
                triggerHook: 'onEnter',
                duration: 300
            })
                .addTo(ctrl)
                .on("enter", function (e) {
                    var progressBar = $('.progress-bar');
                    progressBar.each(function (indx) {
                        $(this).css({ 'width': $(this).attr('aria-valuenow') + '%', 'z-index': '2' });
                    });
                });
        });
    }
    return (
        <React.Fragment>
            {/* Skills*/}
            <div  className="box-inner box-inner--rounded">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h2 className="title title--h3">Skills</h2>
                        <div className="box box__second">
                            <Progress progress_value="70" progress_text="PHP - 5 years experience" />
                            <Progress progress_value="65" progress_text="Wordpress - 4 years experience" />
                            <Progress progress_value="25" progress_text="Photoshop - 1 year experience" />
                            <Progress progress_value="90" progress_text="HTML/CSS - 5 years experience" />
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                        <h2 className="title title--h3">&nbsp;</h2>
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