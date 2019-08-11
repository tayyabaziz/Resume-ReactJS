import React from "react";
import { NavLink } from "react-router-dom";

function PortfolioGridItem(data) {
    return (
        <React.Fragment>
            {/*Portfolio Item*/}
            <figure className={"shadow gallery-grid__item " + data.portfolio_category_class}>
                <div className="gallery-grid__image-wrap">
                    <img className="gallery-grid__image cover lazyload " src={data.portfolio_image} data-zoom alt={data.portfolio_title} title={data.portfolio_title} />
                </div>
                <figcaption className="gallery-grid__caption border pb-1 pl-2">
                    <NavLink exact to={data.portfolio_link}>
                        <h4 className="title gallery-grid__title">{data.portfolio_title}</h4>
                        <span className="gallery-grid__category">{data.portfolio_category}</span>
                    </NavLink>
                </figcaption>
            </figure>
        </React.Fragment>
    );
}

export default PortfolioGridItem;