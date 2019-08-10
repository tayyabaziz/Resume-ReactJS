import React, { useEffect } from "react";
import $ from "jquery";
import isotope from "isotope-layout";

function PortfolioGridFilter(data) {
    useEffect(() => {
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
            var selector = document.activeElement.parentElement.getAttribute("data-filter");
            var grid = document.querySelector('.js-filter-container');
            if (selector !== "*") {
                grid.childNodes.forEach(element => element.style.display = "none");
                var active = document.querySelector('.js-filter-container ' + selector);
                console.log(active);
                if (active)
                    active.style.display = "initial";
            }
            else {
                grid.childNodes.forEach(element => element.style.display = "initial");
            }
            return false;
        });
    }, []);
    return (
        <React.Fragment>
            {/*Filter*/}
            <div className="select">
                <span className="placeholder">Select category</span>
                <ul className="filter">
                    <li className="filter__item">Category</li>
                    <li className="filter__item active" data-filter="*"><a className="filter__link active" href="#filter">All</a></li>
                    <li className="filter__item" data-filter=".category-concept"><a className="filter__link" href="#filter">Concept</a></li>
                    <li className="filter__item" data-filter=".category-design"><a className="filter__link" href="#filter">Design</a></li>
                    <li className="filter__item" data-filter=".category-life"><a className="filter__link" href="#filter">Life</a></li>
                </ul>
                <input type="hidden" name="changemetoo" />
            </div>
        </React.Fragment>
    );
}

export default PortfolioGridFilter;