import React from "react";

function PortfolioGridItem(data) {
    return (
        <React.Fragment>
            {/*Portfolio Item*/}
            <figure className={"gallery-grid__item "+data.portfolio_category_class}>
                <div className="gallery-grid__image-wrap">
                    <img className="gallery-grid__image cover lazyload" src={data.portfolio_image} data-zoom alt={data.portfolio_title} />
                </div>
                <figcaption className="gallery-grid__caption">
                    <h4 className="title gallery-grid__title">{data.portfolio_title}</h4>
                    <span className="gallery-grid__category">{data.portfolio_category}</span>
                </figcaption>
            </figure>
        </React.Fragment>
    );
}

export default PortfolioGridItem;