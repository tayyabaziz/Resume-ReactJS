import React from "react";
import Menu from "./Menu";
import RouteContainer from "./RouteContainer";
import Footer from "./Footer";

function InnerContent() {
    return (
        <div className="col-12 col-md-12 col-xl-9">
            <div className="box pb-0">
                <Menu />
                <RouteContainer />
            </div>
            <Footer />
        </div>
    );
}

export default InnerContent;