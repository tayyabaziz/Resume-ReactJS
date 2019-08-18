import React from "react";

function CaseItem(data) {
    return (
        <React.Fragment>
            {/*Case Item*/}
            <div className="col-12 col-sm-6 col-md-4" >
                <div className="case-item box box__second">
                    {data.icon ? <img className="case-item__icon" src={data.icon} alt={data.title} /> : ""}
                    <div>
                        {data.title ? <h3 className="title title--h5">{data.title}</h3> : ""}
                        {data.caption ? <p className="case-item__caption">{data.caption}</p> : ""}
                    </div>
                </div>
            </div >
        </React.Fragment>
    );
}
export default CaseItem;