$(function() {
  let header = $("#header"),
    introH = $("#intro").innerHeight(),
    quoteH = $("#quote").innerHeight(),
    statH = $("#stat").innerHeight(),
    scrollOffset = $(window).scrollTop();

  /* Fixed Header */

  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);

    if (scrollOffset >= statH) {
      $(".stat__number").each(function() {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text()
            },
            {
              duration: 1000,
              easing: "swing",
              step: function(now) {
                $(this).text(Math.ceil(now));
              }
            }
          );
      });
    }
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

{
    let el = document.getElementById('text_1');
    let text = el.innerHTML;
  
    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        el.innerHTML = text;
    }, 500)
}

{
    let el = document.getElementById('text_2');
    let text = el.innerHTML;
  
    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        el.innerHTML = text;
    }, 300)
}

{
    let el = document.getElementById('text_3');
    let text = el.innerHTML;
  
    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        el.innerHTML = text;
    }, 400)
}
});
