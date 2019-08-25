import React, {useEffect, useState} from "react";
import ContactBox from "./contactbox/ContactBox";
import ContactBoxPlaceholder from "./contactbox/ContactBoxPlaceholder";
import axios from "axios";
import baseUrl from "./BaseUrl";

function Sidebar() {
    const [isLoading, setLoading] = useState(true);
    const [contactData, setContact] = useState(false);
    const [isSmall, setIsSmall] = useState((window.innerWidth < 1200) ? true : false);

    useEffect(() => {
        const source = axios.CancelToken.source();
        async function fetchData() {
            try {
                const url = baseUrl(window) + "detail/contact";
                const responseData = await axios(url, {
                    cancelToken: source.token
                });
                if (!axios.isCancel(responseData)) {
                    await setContact(responseData.data);
                    await setLoading(false);
                }
            } catch (error) {
                console.log(error.message);
                if (error.message !== "Request Cancelled") {
                    await setContact(false);
                    await setLoading(false);
                }
            }
        }

        if (!contactData) {
            fetchData();
        }

        function addSticky() {
            const stickyColumn = document.querySelector(".sticky-column");
            if (window.innerWidth > 1200 && window.scrollY > 150) {
                stickyColumn.classList.add("is_stuck");
            }
            else {
                if (stickyColumn !== null) {
                    stickyColumn.classList.remove("is_stuck");
                }
            }
        }

        addSticky();
        function onScrollEvent() {
            addSticky();
        }

        if (!isSmall) {
            window.addEventListener("scroll", onScrollEvent);
        }

        var resizeTimer;
        function onResizeEvent() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                addSticky();
                (window.innerWidth < 1200) ? setIsSmall(true) : setIsSmall(false);
            }, 50);
        }
        if (isLoading) {
            window.addEventListener("resize", onResizeEvent);
        }

        return () => {
            document.removeEventListener("resize", onResizeEvent);
            document.removeEventListener("scroll", onScrollEvent);
            source.cancel("Request Cancelled");
        };
    }, [contactData, isLoading, isSmall]);

    let ReactHTML = contactData ? <ContactBox isSmall={isSmall} contactData={contactData} /> : "";
    return (
        <aside className="col-12 col-md-12 col-xl-3">
            {isLoading ? <ContactBoxPlaceholder isSmall={isSmall}/> : ReactHTML}
        </aside>
    );
}

export default Sidebar;