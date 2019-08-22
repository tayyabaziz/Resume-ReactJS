$(document).ready(function() {
    /*-----------------------------------------------------------------
      Loaded
    -------------------------------------------------------------------*/

	var tweenTime = 4; //sec

	$('body, .js-img-load').imagesLoaded({ background: !0 }).always( function( instance ) {
	    preloader(); //Init preloader
    });

	function preloader() {
		var tl = new TimelineMax({paused: true});
		tl.set('.preloader', {
			opacity: '1'
		})
		.addLabel('first')
		.to('.preloader', .6, {
			delay: 1,
			opacity: '0',
			zIndex: '-1',
			ease: 'Power3.easeInOut'
		})
		.to('.circle-pulse', .5, {
			opacity: 0,
			ease: 'Power3.easeInOut'
		},'+=.5')
		.to('.preloader__progress span', 1, {
			width: '100%',
			ease: 'Power3.easeInOut'
		}, 'first+=.5');

        tl.duration(tweenTime).play();
        console.log(tl.endTime());

		return tl;
	};

    /*-----------------------------------------------------------------
      Hamburger
    -------------------------------------------------------------------*/

    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
	    $('.inner-menu').toggleClass('is-active');
		$('body').toggleClass('open-menu');
    });


    /*-----------------------------------------------------------------
      Nav
    -------------------------------------------------------------------*/

    var $sideNavOpen = $('.hamburger');
    var tl = new TimelineMax({paused:true, reversed:true});

    if (window.matchMedia("(max-width: 580px)").matches) {
        $('.js-menu').each(function(i) {
            tl.timeScale(1);
            tl.fromTo('.nav', 1.0, {
			    width: '0',
				opacity: 0,
				force3D:true
            }, {
			    width: '100%',
				opacity: 1,
			    ease: Back.easeOut
		    })
            .staggerFrom('.nav__item', 0.2, {
                opacity: 0,
                x: 70,
                ease: Back.easeOut
            },0.06, '-=0.5');
        });
    } else {
        $('.js-menu').each(function(i) {
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
            },0.06, '-=0.25');
        });
    }

    $sideNavOpen.on('click', function() {
        tl.reversed() ? tl.play() : tl.reverse();
    });

    /*-----------------------------------------------------------------
      Sticky sidebar
    -------------------------------------------------------------------*/

    function activeStickyKit() {
        $('.sticky-column').stick_in_parent({
            parent: '.sticky-parent'
        });

        // bootstrap col position
        $('.sticky-column')
        .on('sticky_kit:bottom', function(e) {
            $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function(e) {
            $(this).parent().css('position', 'relative');
        });
    };
    activeStickyKit();

    function detachStickyKit() {
        $('.sticky-column').trigger("sticky_kit:detach");
    };

    //  stop sticky kit
    //  based on your window width

    var screen = 1200;

    var windowHeight, windowWidth;
    windowHeight = $(window).height();
    windowWidth = $(window).width();
    if (windowHeight) {

    }
    if ((windowWidth < screen)) {
        detachStickyKit();
    } else {
        activeStickyKit();
    }

    // windowSize
    // window resize
    function windowSize() {
        windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
        windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    }
    windowSize();

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    $(window).resize(debounce(function(){
        windowSize();
        $(document.body).trigger("sticky_kit:recalc");
        if (windowWidth < screen) {
            detachStickyKit();
        } else {
            activeStickyKit();
        }
    }, 250));

    /*-----------------------------------------------------------------
      ScrollTo
    -------------------------------------------------------------------*/

    function scrollToTop() {
        var $backToTop = $('.back-to-top'),
            $showBackTotop = $(window).height();

        $backToTop.hide();

        $(window).scroll( function() {
            var windowScrollTop = $(window).scrollTop();
            if( windowScrollTop > $showBackTotop ) {
                $backToTop.fadeIn('slow');
            } else {
                $backToTop.fadeOut('slow');
            }
        });

		$backToTop.on('click', function (e) {
            e.preventDefault();
            $(' body, html ').animate( {scrollTop : 0}, 'slow' );
        });
    }

	scrollToTop(); //Init
});