import React, { useState } from "react";
import mediumZoom from "medium-zoom";
import { useSpring, animated } from "react-spring";

function PortfolioItemImages(data) {
  const [zoomEnabled, setZoomEnabled] = useState(false);
  function onLoadEvent() {
    if (!zoomEnabled) {
      mediumZoom("[data-zoom]", {
        margin: 30
      });
      setZoomEnabled(true);
    }
  }
  return (
    <div className="row" onLoad={onLoadEvent}>
      {data.projectImages && data.projectImages.map((element, key) => {
        return (<div className="col-12 col-md-6 col-lg-4 py-2" key={key} >
          <PortfolioItemImage title={data.title} image={element} />
        </div>);
      })}
    </div>
  );
}

function PortfolioItemImage(data) {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 450, friction: 40 } }));

  return (
    <animated.div
      onMouseMove={() => set({ xys: [0, 0, 1.06] })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate((x, y, s) => `scale(${s})`) }}>
      <img className="portfolio-item-image img-fluid shadow" data-zoom src={data.image} alt={data.title} />
    </animated.div>
  );
}

export default PortfolioItemImages;