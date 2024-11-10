// A $( document ).ready() block.
$(document).ready(function () {
  $("#loading").remove();
  //   let posTitle = $("#points-of-sale > ul li h3");
  //   let wrapper = $(".wrapper");
  //   let clients = $("#clients");
  //   posTitle.css({ border: "3px solid blue" });
  //   wrapper.css({ border: "3px solid red" });
  //   clients.css({ border: "3px solid yellow" });

  //   $("#points-of-sale > ul")
  //     .children()
  //     .filter(function (idx, ele) {
  //       console.log(ele);
  //       return idx % 2 === 0;
  //     })
  //     .css({ background: "red" });
  //   $("#contact-methods").prev().css({ border: "3px solid blue" });
  //   $("#contact-methods").next().css({ border: "3px solid red" });
  //   $("#contact-methods").parent().css({ border: "3px solid green" });
  //   $("#contact-methods").children().css({ border: "3px solid purple" });
  $("#contact-methods")
    .children("li")
    .each(function (idx, ele) {
      $(ele).click(function () {
        $(this)
          .toggleClass("active")
          .attr({ active: true })
          .animate(
            {
              left: "50px",
            },

            350,
            "linear",
            function () {
              $(this).siblings().animate({
                left: "0",
              });
              $(this).siblings().removeClass("active").removeAttr("active");
            }
          );
      });
    });

  //   $("#contact-methods li").css({

  //     color: "red",
  //     backgroundColor: "yellow",
  //   });
  $("#points-of-sale ul").children("li").hide();
  $("#lead-banner a").on("click", function (e) {
    e.preventDefault();

    $("#points-of-sale ul").children("li").slideToggle();
  });

  $("#clients").on("click", function () {
    $(this).fadeOut();
  });

  $("#points-of-sale ul")
    .children()
    .on("click", function () {
      $(this).siblings().find("p").slideUp(350);
      $(this).find("p").slideToggle(350);
    });
});
