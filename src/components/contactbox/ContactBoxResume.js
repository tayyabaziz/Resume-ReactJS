import React from "react";
const resumeFile = "/files/Tayyab Aziz Resume.pdf";

function ContactBoxResume() {
  return (
    <a className="btn btn--blue-gradient btnResume" target="_blank" rel="noopener noreferrer" href={resumeFile}><i className="font-icon icon-download"></i> Download CV</a>
  );
}
export default ContactBoxResume;