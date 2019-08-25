import React, { useEffect } from "react";
import $ from "jquery";

function BacktoTop() {

  function scrollToTop() {
    var $backToTop = $('.back-to-top'),
      $showBackTotop = $(window).height();

    $backToTop.hide();

    $(window).scroll(function () {
      var windowScrollTop = $(window).scrollTop();
      if (windowScrollTop > $showBackTotop) {
        $backToTop.fadeIn('slow');
      } else {
        $backToTop.fadeOut('slow');
      }
    });

    $backToTop.on('click', function (e) {
      e.preventDefault();
      $(' body, html ').animate({ scrollTop: 0 }, 'slow');
    });
  }
  useEffect(() => {
    // const backToTop = document.querySelector('.back-to-top');
    // const showBackTotop = window.innerHeight;
    // //backToTop.hide();
    // window.addEventListener("scroll", () => {
    //   var windowScrollTop = window.scrollTop();
    //   if (windowScrollTop > showBackTotop) {
    //     //backToTop.fadeIn('slow');
    //   } else {
    //     //backToTop.fadeOut('slow');
    //   }
    // });
    scrollToTop();
  });
  return (
    <div className="back-to-top"></div>
  );
}

export default BacktoTop;