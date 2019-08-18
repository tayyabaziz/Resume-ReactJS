import React from "react";
import iconBack from "../../assets/icons/icon-back.svg";

function PortfolioItemBackBtn(data) {
    return (
        <div onClick={() => data.history.push("/portfolio/")} className="circle-back">
            <img src={iconBack} alt="" />
        </div>
    );
}
export default PortfolioItemBackBtn;