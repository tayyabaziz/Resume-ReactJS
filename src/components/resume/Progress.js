import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

function Progress(data) {
  return (
    <OverlayTrigger placement="top" overlay={<Tooltip>  {data.progress_text + " " + data.progress_value + "%"}</Tooltip>}>
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow={data.progress_value} aria-valuemin="0" aria-valuemax="100">
          <div className="progress-text"><span>{data.progress_text}</span><span>{data.progress_value}%</span></div>
        </div>
        <div className="progress-text"><span>{data.progress_text}</span></div>
      </div>
    </OverlayTrigger>
  );
}
export default Progress;