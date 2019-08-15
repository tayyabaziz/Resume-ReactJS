import React, { useEffect, useState } from "react";
import mediumZoom from "medium-zoom";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import PortfolioGridItem from "./PortfolioGridItem";
import PortfolioGridFilter from "./PortfolioGridFilter";

function PortfolioGrid(data) {
    const [zoomEnabled, setZoomEnabled] = useState(false);
    const [grid, setGrid] = useState(false);
    useEffect(() => {
        if (!grid) {
            const grid2 = document.querySelector(".js-masonry");
            var $portfolioMasonry = new Isotope(grid2, {
                itemSelector: ".gallery-grid__item",
                layoutMode: "masonry",
                percentPosition: true,
                transitionDuration: "0.5s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                },
                fitRows: {
                    gutter: ".gutter-sizer"
                },
                masonry: {
                    columnWidth: ".gallery-grid__item",
                    gutter: ".gutter-sizer",
                    isAnimated: true
                }
            });
            setGrid($portfolioMasonry);
        }
        if (grid) {
            var imageLoad = new imagesLoaded(document.querySelector(".js-masonry"));
            imageLoad.on("done", () => {
                grid.arrange();
            });
        }

        if (window.location.pathname === "/portfolio/") {
            window.addEventListener("resize", onResizeEvent);
        }

        var resizeTimer;
        function onResizeEvent() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                if (grid) {
                    grid.arrange();
                }
            }, 300);
        }
        return () => {
            document.removeEventListener("resize", onResizeEvent);
        };
    }, [grid]);

    function onLoadEvent() {
        if (!zoomEnabled) {
            mediumZoom('[data-zoom]', {
                margin: 30
            });
            setZoomEnabled(true);
        }
    }
    const categories = data.projectData && data.projectData.map(element => {
        return element.category;
    });
    return (
        <React.Fragment>
            <PortfolioGridFilter categories={categories} grid={grid} />
            {/*Content*/}
            <div onLoad={onLoadEvent} className="gallery-grid js-masonry js-filter-container">
                <div className="gutter-sizer"></div>
                {data.projectData && data.projectData.map((element) => {
                    return (<PortfolioGridItem key={element.key} portfolio_category_class={"category-" + element.category.toLowerCase()} portfolio_image={element.images[0]} portfolio_title={element.title} portfolio_category={element.category}portfolio_link={"/portfolio/"+ element.projectName.toLowerCase()+"/" }/>);
                })}
            </div>
        </React.Fragment>
    );
}

export default PortfolioGrid;