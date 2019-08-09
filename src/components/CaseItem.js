import React from "react";

function CaseItem(data) {
    let caption, title, icon = "";
    if (data.caption)
        caption = <p className="case-item__caption">{data.caption}</p>;
    if (data.title)
        title = <h3 className="title title--h5">{data.title}</h3>;
    if (data.icon)
        icon = <img className="img-fluid case-item__icon" src={data.icon} alt="" />;

    return (
        <React.Fragment>
            {/*Case Item*/}
            < div className="col" >
                <div className="case-item box box__second">
                    {icon}
                    <div>
                        {title}
                        {caption}
                    </div>
                </div>
            </div >
        </React.Fragment>
    );
}


export default CaseItem;