import React from "react";

function PortfolioItemBackBtn(data) {
    return (
        <div onClick={() => data.history.push("/portfolio/")} className="circle-back">
            <i className="fa fa-arrow-left fa-2x" style={{ color: "white" }}></i>
        </div>
    );
}
export default PortfolioItemBackBtn;