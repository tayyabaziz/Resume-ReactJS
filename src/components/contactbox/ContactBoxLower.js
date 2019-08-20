import React, { useEffect, useState } from "react";
import ContactBoxCB from "./ContactBoxCB";
import ContactBoxResume from "./ContactBoxResume";
import Collapse from '@kunukn/react-collapse';

function ContactBoxLower (data) {
  const [isSmall, setIsSmall] = useState((window.innerWidth < 1183) ? true : false);
  useEffect(() => {
    var resizeTimer;
    function onResizeEvent () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        (window.innerWidth < 1183) ? setIsSmall(true) : setIsSmall(false);
      }, 80);
    }
    window.addEventListener("resize", onResizeEvent);
    return () => {
      document.removeEventListener("resize", onResizeEvent);
    };
  });
  return (
    isSmall ?
      <Collapse className="collapse-css-transition" isOpen={data.btnToggle} transition="height 300ms cubic-bezier(.4, 0, .2, 1)" aria-hidden={data.btnToggle ? 'false' : 'true'}>
        <div className={"sidebar__info box-inner box-inner--rounded d-xl-block contactInfo " + [data.btnToggle ? "open" : ""]}>
          <ContactBoxCB />
          <ContactBoxResume />
        </div>
      </Collapse> :
      <div className="sidebar__info box-inner box-inner--rounded d-xl-block contactInfo ">
        <ContactBoxCB />
        <ContactBoxResume />
      </div>
  );
}
export default ContactBoxLower;