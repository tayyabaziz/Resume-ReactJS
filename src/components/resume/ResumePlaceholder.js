import React from "react";
import ResumePlaceholderUpper from "./ResumePlaceholderUpper";
import ResumePlaceholderLower from "./ResumePlaceholderLower";

function ResumePlaceholder() {
  return (
    <React.Fragment>
      <ResumePlaceholderUpper />
      <ResumePlaceholderLower/>
    </React.Fragment>
  );
}

export default ResumePlaceholder;