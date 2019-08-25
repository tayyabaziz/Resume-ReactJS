import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import ImagesLoaded from "imagesloaded";
import PortfolioGridItem from "./PortfolioGridItem";
import PortfolioGridFilter from "./PortfolioGridFilter";

function PortfolioGrid(data) {
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
            var imageLoad = new ImagesLoaded(document.querySelector(".js-masonry"));
            imageLoad.on("done", () => {
                grid.arrange();
            });
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
        if (window.location.pathname === "/portfolio/") {
            window.addEventListener("resize", onResizeEvent);
        }
        return () => {
            document.removeEventListener("resize", onResizeEvent);
        };
    }, [grid]);

    const categories = data.projectData && data.projectData.map((element) => {
        return element.category;
    });
    return (
        <React.Fragment>
            <PortfolioGridFilter categories={categories} grid={grid} />
            {/*Content*/}
            <div className="gallery-grid js-masonry js-filter-container">
                <div className="gutter-sizer"></div>
                {data.projectData && data.projectData.map((element, key) => {
                    return (<PortfolioGridItem key={key} portfolio_category_class={"category-" + element.category.toLowerCase()} portfolio_image={element.images[0]} portfolio_title={element.title} portfolio_category={element.category}portfolio_link={"/portfolio/"+ element.projectName.toLowerCase()+"/" }/>);
                })}
            </div>
        </React.Fragment>
    );
}

export default PortfolioGrid;