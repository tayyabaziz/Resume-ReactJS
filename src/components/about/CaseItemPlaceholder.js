import React from "react";
import Placeholder from "../Placeholder";

function CaseItemPlaceholder(data) {
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="case-item box box__second">
                <Placeholder className="case-item__icon" style={{ height: "40px", width: "40px" }} />
                <div>
                    <h3 className="title title--h5">
                        <Placeholder style={{ width: "100%", height: "21px" }} />
                    </h3>
                    <p className="case-item__caption">
                        <Placeholder style={{ width: "100%", height: "15px" }} />
                        <Placeholder style={{ width: "100%", height: "15px" }} />
                        <Placeholder style={{ width: "100%", height: "15px" }} />
                        <Placeholder style={{ width: "60%", height: "15px" }} />
                    </p>
                </div>
            </div>
        </div>
    );
}
export default CaseItemPlaceholder;