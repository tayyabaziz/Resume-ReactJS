import React from "react";

function PortfolioGridFilter(data) {
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