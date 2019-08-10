import React from "react";
import Masonry from "react-masonry-component";
import image01 from "../assets/img/image_01.jpg";
import image02 from "../assets/img/image_02.jpg";
import image03 from "../assets/img/image_03.jpg";
import image04 from "../assets/img/image_04.jpg";
import PortfolioGridItem from "./PortfolioGridItem";
import PortfolioGridFilter from "./PortfolioGridFilter";

function PortfolioGrid(data) {
    const masonryOptions = {
        transitionDuration: 0
    };

    return (
        <React.Fragment>
            {/*Content*/}
            <PortfolioGridFilter />
            <Masonry
                className={"gallery-grid js-masonry js-filter-container"} // default
                options={masonryOptions}
            >
                <PortfolioGridItem portfolio_category_class="category-concept" portfolio_image={image01} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image02} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-life" portfolio_image={image03} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image04} portfolio_title="Half Avocado" portfolio_category="Concept" />
            </Masonry>
        </React.Fragment>
    );
}

export default PortfolioGrid;