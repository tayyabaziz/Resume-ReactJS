import React, { useEffect } from "react";
import $ from "jquery";
import Isotope from 'isotope-layout'
import imagesLoaded from 'imagesloaded'
import image01 from "../assets/img/image_01.jpg";
import image02 from "../assets/img/image_02.jpg";
import image03 from "../assets/img/image_03.jpg";
import image04 from "../assets/img/image_04.jpg";
import PortfolioGridItem from "./PortfolioGridItem"
import PortfolioGridFilter from "./PortfolioGridFilter"

function PortfolioGrid(data) {
    useEffect(() => {

        const grid = document.querySelector(".js-masonry");
        var $portfolioMasonry = new Isotope(grid, {
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

        $('.select').on('click', '.placeholder', function () {
            var parent = $(this).closest('.select');
            if (!parent.hasClass('is-open')) {
                parent.addClass('is-open');
                $('.select.is-open').not(parent).removeClass('is-open');
            } else {
                parent.removeClass('is-open');
            }
        }).on('click', 'ul>li', function () {
            var parent = $(this).closest('.select');
            parent.removeClass('is-open').find('.placeholder').text($(this).text());
            parent.find('input[type=hidden]').attr('value', $(this).attr('data-value'));

            $('.filter__item').removeClass('active');
            $(this).addClass('active');
            var selector = document.querySelector(".filter__item.active").getAttribute("data-filter");
            console.log(selector);
            $portfolioMasonry.arrange({
                filter: selector
            });
            return false;
        });

        imagesLoaded($portfolioMasonry).progress(function () {
            $portfolioMasonry.arrange({
                columnWidth: '.gallery-grid__item',
                gutter: '.gutter-sizer',
                isAnimated: true,
                layoutMode: 'fitRows',
                fitRows: {
                    gutter: '.gutter-sizer'
                }
            });
        });
    }, [])
    return (
        <React.Fragment>
            <PortfolioGridFilter />
            {/*Content*/}
            <div className="gallery-grid js-masonry js-filter-container">
                <div className="gutter-sizer"></div>
                <PortfolioGridItem portfolio_category_class="category-concept" portfolio_image={image01} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image02} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-life" portfolio_image={image03} portfolio_title="Half Avocado" portfolio_category="Concept" />
                <PortfolioGridItem portfolio_category_class="category-design" portfolio_image={image04} portfolio_title="Half Avocado" portfolio_category="Concept" />
            </div>
        </React.Fragment>
    );
}

export default PortfolioGrid;