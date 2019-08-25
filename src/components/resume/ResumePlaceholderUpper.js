import React from "react";
import Placeholder from "../Placeholder";
import PageTitlePlaceholder from "../PageTitlePlaceholder";

function ResumePlaceholderUpper() {
  const items = [];
  for (let index = 0; index < 3; index++) {
    const items2 = [];
    for (let index2 = 0; index2 < 3; index2++) {
      items2.push(
        <article className="timeline__item" key={index2}>
          <div className="row">
            <div className="col-8">
              <h5 className="title title--h5 timeline__title">
                <Placeholder style={{ height: "21px", width: "100%" }} />
              </h5>
            </div>
            <div className="col-4">
              <span className="timeline__period float-right">
                <Placeholder style={{ height: "21px", width: "100%" }} />
              </span>
            </div>
            <div className="timeline__description col">
              <Placeholder style={{ height: "22px", width: "100%" }} />
              <Placeholder style={{ height: "22px", width: "100%" }} />
            </div>
          </div>
        </article>
      );
    }
    items.push(
      <div className="col-12 mt-2" key={index}>
        <h2 className="title title--h3">
          <Placeholder style={{ height: "35px", width: "35px" }} />
          <Placeholder style={{ height: "35px", width: "160px" }} >
            <rect x="45" y="5" rx="1" ry="1" width="100%" height="90%" />
          </Placeholder>
          <hr />
        </h2>
        <div className="col-12">
          <div className="timeline">
            {items2}
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="pb-2">
        <PageTitlePlaceholder/>
      </div>
      <div className="pb-0">
        <div className="row">
          {items}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ResumePlaceholderUpper;