$(function() {
  let header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();

  /* Fixed Header */

  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);

    // Счётчик чисел
    // if (scrollOffset >= statH) {
    //   $(".stat__number").each(function() {
    //     $(this)
    //       .prop("Counter", 0)
    //       .animate(
    //         {
    //           Counter: $(this).text()
    //         },
    //         {
    //           duration: 1000,
    //           easing: "swing",
    //           step: function(now) {
    //             $(this).text(Math.ceil(now));
    //           }
    //         }
    //       );
    //   });
    // }
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  // Кнопка связаться (скролл)

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top;

    $("html, body").animate(
      {
        scrollTop: blockOffset
      },
      500
    );
  });
});
