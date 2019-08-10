import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import image01 from "../file/portfolio/image-01.jpg";
import image02 from "../file/portfolio/image-02.jpg";
import image03 from "../file/portfolio/image-03.jpg";
import image04 from "../file/portfolio/image-04.jpg";
import PortfolioGridItem from "./PortfolioGridItem";
import PortfolioGridFilter from "./PortfolioGridFilter";

function PortfolioGrid(data) {
    const [grid, setGrid] = useState({});
    useEffect(() => {
        const grid2 = document.querySelector(".js-masonry");
        var $portfolioMasonry = new Isotope(grid2, {
            itemSelector: '.gallery-grid__item',
            layoutMode: 'fitRows',
            percentPosition: true,
            transitionDuration: '0.5s',
            hiddenStyle: {
                opacity: 0,
                transform: 'scale(0.001)'
            },
            visibleStyle: {
                opacity: 1,
                transform: 'scale(1)'
            },
            fitRows: {
                gutter: '.gutter-sizer'
            },
            masonry: {
                columnWidth: '.gallery-grid__item',
                gutter: '.gutter-sizer',
                isAnimated: true
            }
        });
        var imageLoad = new imagesLoaded($portfolioMasonry, function () {
            console.log("ASDSADSAD");
            $portfolioMasonry.arrange({
                columnWidth: '.gallery-grid__item',
                gutter: '.gutter-sizer',
                isAnimated: true,
                layoutMode: 'fitRows',
                fitRows: {
                    gutter: '.gutter-sizer'
                }
            });
            $portfolioMasonry.layout();
        });

        imageLoad.progress(function (instance) {
            // layout Isotope after each image loads
            console.log(instance);
            console.log("ASDS5453345ADSAD");
            $portfolioMasonry.layout();
        });
        setGrid($portfolioMasonry);
    }, [])
    return (
        <React.Fragment>
            <PortfolioGridFilter grid={grid} />
            {/*Content*/}
            <div className="gallery-grid js-masonry js-filter-container">
                <div className="gutter-sizer"></div>
                <PortfolioGridItem portfolio_category_class="category-concept" portfolio_image={image01} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image02} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-life" portfolio_image={image03} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image04} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-concept" portfolio_image={image01} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image02} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-life" portfolio_image={image03} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image04} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-concept" portfolio_image={image01} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image02} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-life" portfolio_image={image03} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image04} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-concept" portfolio_image={image01} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image02} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-life" portfolio_image={image03} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image04} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-concept" portfolio_image={image01} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image02} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-life" portfolio_image={image03} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image04} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-concept" portfolio_image={image01} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image02} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-life" portfolio_image={image03} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image04} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-concept" portfolio_image={image01} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image02} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-life" portfolio_image={image03} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image04} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-concept" portfolio_image={image01} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image02} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-life" portfolio_image={image03} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image04} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-concept" portfolio_image={image01} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image02} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-life" portfolio_image={image03} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image04} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-concept" portfolio_image={image01} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image02} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-life" portfolio_image={image03} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image04} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-concept" portfolio_image={image01} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image02} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-life" portfolio_image={image03} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image04} portfolio_title="Half Avocado" portfolio_category="Concept" />
            </div>
        </React.Fragment>
    );
}

export default PortfolioGrid;