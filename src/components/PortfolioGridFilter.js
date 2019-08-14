import React from "react";

function PortfolioGridFilter(data) {
    function onOpen() {
        document.querySelector(".placeholder").parentElement.classList.toggle("is-open");
    }

    function onFilterChange(e) {
        e.preventDefault();
        e.persist();
        document.querySelectorAll(".filter__item").forEach(element => {
            element.classList.remove("active");
        });
        document.querySelectorAll(".filter__link").forEach(element => {
            element.classList.remove("active");
        });
        if (e.target.className === "filter__item") {
            document.querySelector(".placeholder").innerHTML = e.target.firstChild.innerHTML;
            e.target.classList.add("active");
            e.target.firstChild.classList.add("active");
        }
        else if (e.target.className === "filter__link") {
            document.querySelector(".placeholder").innerHTML = e.target.innerHTML;
            e.target.classList.add("active");
            e.target.parentElement.classList.add("active");
        }
        var selector = document.querySelector(".filter__item.active").getAttribute("data-filter");
        data.grid.arrange({
            filter: selector
        });
        return true;
    }
    var categories = Array.from(new Set(data.categories))
    return (
        <React.Fragment>
            {/*Filter*/}
            <div className="select">
                <span className="placeholder" onClick={onOpen}>Select category</span>
                <ul className="filter">
                    <li className="filter__item">Category</li>
                    <li className="filter__item active" data-filter="*" onClick={onFilterChange}><a className="filter__link active" href="#/">All</a></li>
                    {categories && categories.map(element => {
                        return (<li className="filter__item" data-filter={".category-" + element.toLowerCase()} onClick={onFilterChange}><a className="filter__link" href="#/">{element}</a></li>);
                    })}
                </ul>
                <input type="hidden" name="changemetoo" />
            </div>
        </React.Fragment>
    );
}

export default PortfolioGridFilter;