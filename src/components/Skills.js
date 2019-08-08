import React from 'react';
import Education from './Education';
import Experience from './Experience';

function Skills(data) {
    return (
        <React.Fragment>
            {/* Skills*/}
            <div className="box-inner box-inner--rounded">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h2 className="title title--h3">Design Skills</h2>
                        <div className="box box__second">
                            {/* Progress*/}
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-text"><span>Web Design</span><span>80%</span></div>
                                </div>
                                <div className="progress-text"><span>Web Design</span></div>
                            </div>

                            {/* Progress*/}
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-text"><span>Graphic Design</span><span>75%</span></div>
                                </div>
                                <div className="progress-text"><span>Graphic Design</span></div>
                            </div>

                            {/* Progress*/}
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-text"><span>Photoshop</span><span>90%</span></div>
                                </div>
                                <div className="progress-text"><span>Photoshop</span></div>
                            </div>

                            {/* Progress*/}
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-text"><span>Illustrator</span><span>50%</span></div>
                                </div>
                                <div className="progress-text"><span>Illustrator</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                        <h2 className="title title--h3">Coding Skills</h2>
                        <div className="box box__second">
                            {/* Progress*/}
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-text"><span>WordPress</span><span>70%</span></div>
                                </div>
                                <div className="progress-text"><span>WordPress</span></div>
                            </div>

                            {/* Progress*/}
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-text"><span>Javascript</span><span>70%</span></div>
                                </div>
                                <div className="progress-text"><span>Javascript</span></div>
                            </div>

                            {/* Progress*/}
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-text"><span>HTML</span><span>100%</span></div>
                                </div>
                                <div className="progress-text"><span>HTML</span></div>
                            </div>

                            {/* Progress*/}
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-text"><span>PHP</span><span>30%</span></div>
                                </div>
                                <div className="progress-text"><span>PHP</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Skills;