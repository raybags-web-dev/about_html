"use strict";

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

  // functions running on window resize
  // $(window).on("resize", () => {});
  // $(window).on("orientationChange", () => {});
  // $(window).on("load", () => {});
  // $(window).on("mousemove", () => {});
});
