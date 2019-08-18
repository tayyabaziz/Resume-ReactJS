import React from "react";
import ContentLoader from "react-content-loader";

function Placeholder(data) {
    return (
        <ContentLoader className={data.className} style={data.style}>
            {/* Pure SVG */}
            {data.children ? data.children : <rect x="0" y="0" rx="1" ry="1" width="100%" height="100%" />}
        </ContentLoader>
    );
}
export default Placeholder;