import React from "react";

function Footer(data) {
    return (
        <React.Fragment>
            {/*Footer*/}
            <footer className="box my-4 footer text-dark">
                © {(new Date().getFullYear())} Tayyab Aziz | 
                <a className="ml-1 btn-link" style={{color: #0031FF;}} href="/sitemap/">Site map</a>
            </footer>
        </React.Fragment>
    );
}

export default Footer;