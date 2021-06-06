"use strict";
const menu_link = document.querySelector(".close-nav-link");
const side_nav = document.getElementById("header");

// general jQuery funtionality
$(document).ready(function () {
  console.log("jquery loaded");

  // active class switcher on scroll (Scroll spy)
  $(window).on("scroll", function () {
    let scrollBarLocation = $(this).scrollTop();
    let scrollLinks = $(".hyper-link");

    scrollLinks.each(function () {
      let sectionOffset = $(this.hash).offset().top - 70;
      if (sectionOffset <= scrollBarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });

  // =================smooth scrolling==================
  // close side menu arrow button handler
  $(menu_link).on("click", function () {
    $(side_nav).css({ width: "10%" });
  });
  // open side menu arrow button handler

  $(side_nav).on("hover", function () {
    $(side_nav).css({ width: "25%" });
  });

  // =================smooth scrolling==================
  // handle Smooth scrolling helper
  function handlePageScroll() {
    let target = $(this).attr("href");
    $("body, html").animate({ scrollTop: $(target).offset().top }, 1000);
    return false;
  }
  // smooth scrolling navigation on big screen
  $(".link-anchors a").on("click", handlePageScroll);
  // smooth scrolling navigation on small screen
  $(".link-anchors a").on("click", handlePageScroll);

  // paragraph typewriter effect

  function isInViewport(element) {
    let elementTop = $(element).offset().top;
    let elementBottom = elementTop + $(element).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  $(".content_1 .test").each(function (index, current) {
    $(window).on("scroll", () => {
      if (isInViewport($(current))) {
        $(this).addClass("placetext");
      } else {
        $(this).removeClass("placetext");
      }
    });
  });
  // blink text handler
  $(".card-heading .p-heading").each(function (index, current_heading) {
    $(window).on("scroll", () => {
      if (isInViewport($(current_heading))) {
        $(this).addClass("blink-text");
      } else {
        $(this).removeClass("blink-text");
      }
    });
  });
});
