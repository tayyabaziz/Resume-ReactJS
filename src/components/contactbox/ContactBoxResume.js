import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const resumeFile = "/files/Tayyab Aziz Resume.pdf";

function ContactBoxResume(data) {
  return (
    <a className={"btn btn--blue-gradient " + [data.isSmall ? "btnResume" : ""]} target="_blank" rel="noopener noreferrer" href={resumeFile} title="Download CV">
      <FontAwesomeIcon icon={faDownload} />
      {data.isSmall && !data.btnToggle ? "" : " Download CV" }
    </a>
  );
}
export default ContactBoxResume;