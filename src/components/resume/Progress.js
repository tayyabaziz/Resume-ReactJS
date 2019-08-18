import React from "react";

function Progress(data) {
  return (
    <React.Fragment>
      {/* Progress*/}
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow={data.progress_value} aria-valuemin="0" aria-valuemax="100">
          <div className="progress-text"><span>{data.progress_text}</span><span>{data.progress_value}%</span></div>
        </div>
        <div className="progress-text"><span>{data.progress_text}</span></div>
      </div>
    </React.Fragment>
  );
}

export default Progress;