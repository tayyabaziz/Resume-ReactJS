import React from "react";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function PortfolioGridItem(data) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 450, friction: 40 } }));
    return (
        <React.Fragment>
            {/*Portfolio Item*/}
            <animated.figure className={"shadow gallery-grid__item " + data.portfolio_category_class}
                onMouseMove={() => set({ xys: [0, 0, 1.06] })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate((x, y, s) => `scale(${s})`) }}>
                <NavLink exact to={data.portfolio_link}>
                    <div className="gallery-grid__image-wrap">
                        <img className="img-fluid" src={data.portfolio_image} data-zoom alt={data.portfolio_title} title={data.portfolio_title} />
                    </div>
                    <figcaption className="gallery-grid__caption border pb-1 pl-2">
                        <h4 className="title gallery-grid__title">{data.portfolio_title}</h4>
                        <span className="gallery-grid__category">{data.portfolio_category}</span>
                    </figcaption>
                </NavLink>
            </animated.figure>
        </React.Fragment>
    );
}

export default PortfolioGridItem;