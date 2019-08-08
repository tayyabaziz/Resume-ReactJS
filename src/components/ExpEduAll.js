import React from 'react';
import Education from './Education';
import Experience from './Experience';

function ExpEduAll(data) {
    return (
        <React.Fragment>
            {/* Experience*/ }
            <div className="pb-0">
                <div className="row">
                    <Education/>
                    <Experience />
                </div>
            </div>
        </React.Fragment>
    );
}

export default ExpEduAll;