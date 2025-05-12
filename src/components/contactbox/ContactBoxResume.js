import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function ContactBoxResume(data) {
  return (
    <OverlayTrigger placement="top" overlay={<Tooltip>Download CV</Tooltip>}>
      <a className={"btn btn--blue-gradient " + [(data.isSmall && !data.btnToggle) ? "btnResume" : ""]} target="_blank" rel="noopener noreferrer" href={data.resumeFile} aria-label={data.resumeFile}>
        <FontAwesomeIcon icon={faDownload} />
        {(data.isSmall && !data.btnToggle) ? "" : " Download CV"}
      </a>
    </OverlayTrigger>
  );
}
export default ContactBoxResume;