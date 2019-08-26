import React from "react";

function CaseItem(data) {
    return (
        <React.Fragment>
            {/*Case Item*/}
            <div className="col-12 col-sm-6 col-md-4" >
                <div className="case-item box box__second shadow">
                    {data.icon ? <i className={"case-item__icon fa-2x "+data.icon}/> : ""}
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