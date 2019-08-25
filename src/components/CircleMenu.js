import React, { useEffect } from "react";
import { TimelineMax, Back } from "gsap";

function CircleMenu(data) {
    useEffect(() => {
        const sideNavOpen = document.querySelector(".hamburger");
        const tl = new TimelineMax({ paused: true, reversed: true });
        if (window.matchMedia("(max-width: 580px)").matches) {
            document.querySelectorAll('.js-menu').forEach((i) => {
                tl.timeScale(1);
                tl.fromTo('.nav', 1.0, {
                    width: '0',
                    opacity: 0,
                    force3D: true
                }, {
                        width: '100%',
                        opacity: 1,
                        ease: Back.easeOut
                    })
                    .staggerFrom('.nav__item', 0.2, {
                        opacity: 0,
                        x: 70,
                        ease: Back.easeOut
                    }, 0.06, '-=0.5');
            });
        }
        else {
            document.querySelectorAll('.js-menu').forEach((i) => {
                tl.timeScale(1);
                tl.fromTo('.nav', 1.0, {
                    width: '0'
                }, {
                        width: '100%',
                        ease: 'Bounce.easeOut'
                    })
                    .staggerFrom('.nav__item', 0.2, {
                        opacity: 0,
                        x: 70,
                        ease: Back.easeOut
                    }, 0.06, '-=0.25');
            });
        }
        sideNavOpen.addEventListener('click', function () {
            tl.reversed() ? tl.play() : tl.reverse();
        });
    }, []);
    return (
        <div className="circle-menu">
            <div className={"hamburger " + [data.menuToggle ? "is-active" : ""]} onClick={() => data.setMenuToggle(!data.menuToggle)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
}

export default CircleMenu;