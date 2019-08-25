import React, { useEffect } from "react";
import { TimelineMax } from "gsap";
import ImagesLoaded from "imagesloaded";

function Preloader() {
  function preloader(tweenTime) {
    var tl = new TimelineMax({ paused: true });
    tl.set(".preloader", {
      opacity: "1"
    })
      .addLabel("first")
      .to(".preloader", .6, {
        delay: 1,
        opacity: "0",
        zIndex: "-1",
        ease: "Power3.easeInOut"
      })
      .to(".circle-pulse", .5, {
        opacity: 0,
        ease: "Power3.easeInOut"
      }, "+=.5")
      .to(".preloader__progress span", 1, {
        width: "100%",
        ease: "Power3.easeInOut"
      }, "first+=.5");

    tl.duration(tweenTime).play();
    return tl;
  };
  useEffect(() => {
    const tweenTime = 1;
    var imageLoad = new ImagesLoaded(document.querySelector("body, .js-img-load"));
    imageLoad.on("always", (instance) => {
      preloader(tweenTime); //Init preloader
    });
  });
  return (
    <div className="preloader">
      <div className="preloader__wrap">
        <div className="circle-pulse">
          <div className="circle-pulse__1"></div>
          <div className="circle-pulse__2"></div>
        </div>
        <div className="preloader__progress"><span></span></div>
      </div>
    </div>
  );
}

export default Preloader;