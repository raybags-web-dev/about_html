"use strict";
const menu_link = document.querySelector(".close-nav-link");
const side_nav = document.getElementById("header");

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

  // close side menu arrow button handler
  $(menu_link).on("click", function () {
    $(side_nav).css({ width: "10%" });
  });
  // open side menu arrow button handler

  $(side_nav).on("hover", function () {
    $(side_nav).css({ width: "25%" });
  });

});
