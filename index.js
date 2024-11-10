$(document).ready(function () {
  // $("#loading").remove();
  console.log($(".box-container"));
  function onClickHandler() {
    // console.log("click");
    $(this).find("#box-1").toggleClass("flipped");
  }

  $(".box-container").on("click", onClickHandler);

  let text = gsap.timeline({
    smoothChildTiming: true,
  });
  text.fromTo(
    ".box #text2",
    {
      x: 450,
    },
    {
      x: "-100%",
      repeat: -1,
      duration: 4,
      ease: "none",
    }
  );
  text.fromTo(
    ".box #text1",
    {
      x: -450,
    },
    {
      x: "100%",
      repeat: -1,
      duration: 4,
      ease: "none",
      delay: 1.177,
    },
    "<"
  );

  // delay <=1 advance

  // text.fromTo(
  //   ".box .text",
  //   {
  //     x: 450,
  //   },
  //   {
  //     x: "-100%",
  //     repeat: -1,
  //     duration: 4,
  //     ease: "none",
  //     stagger: 0.99,
  //     onRepeat: () => {
  //       console.log("finished");
  //     },
  //   }
  // );

  $("#nav")
    .children()
    .on("click", function () {
      let action = $(this).attr("data-action").toLowerCase();
      // console.log(action);
      switch (action) {
        case "play":
          text.play();
          break;
        case "pause":
          text.pause();
          break;
        case "reverse":
          text.reverse();
          break;
        case "restart":
          text.restart();
          break;
        default:
          return false;
      }
    });
});
