import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Achievement from './Achievement';

function ExpEduAll(data) {
    return (
        <React.Fragment>
            {/* Experience*/ }
            <div className="pb-0">
                <div className="row">
                    <Education/>
                    <Experience />
                    <Achievement />
                </div>
            </div>
        </React.Fragment>
    );
}

export default ExpEduAll;