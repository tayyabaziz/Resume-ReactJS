import React from "react";
import Placeholder from "../Placeholder";

function ContactBoxResumePlaceholder(data) {
  return (
    <div style={{textAlign: "center"}}>
      <Placeholder className={(data.isSmall && !data.btnToggle) ? "btnResume" : ""} style={(data.isSmall && !data.btnToggle) ? { height: "46.4px", width: "79px" } : { height: "46.4px", width: "12rem", padding: "0", borderRadius: "10rem", margin: "auto" }} />
    </div>
  );
}
export default ContactBoxResumePlaceholder;