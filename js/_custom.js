$(function() {

  let header = $("#header"),
  introH = $("#intro").innerHeight(),
  statH = $("#stat").innerHeight(),
  scrollOffset = $(window).scrollTop();

  $(window).scroll(function() {
		// проверка на докрутку до определенного элемента
    let scroll_prospects = $('.prospects').offset().top;
		//если мы докрутили до нужного элемента 
		if ($(this).scrollTop() > scroll_prospects) {
        $('#text_1').fadeOut({
          duration: 1000,
          easing: 'swing'
        });
        $('#text_2').fadeOut({
          duration: 1000,
          easing: 'swing'
        });
        $('#text_3').fadeOut({
          duration: 1000,
          easing: 'swing'
        });
    }
});	

  /* Fixed Header */

  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);

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

// Бегущие строки

// {
//     let el = document.getElementById('text_1');
//     let text = el.innerHTML;
  
//     setInterval(function () {
//         text = text[text.length - 1] + text.substring(0, text.length - 1);
//         el.innerHTML = text;
//     }, 500)
// }

// {
//     let el = document.getElementById('text_2');
//     let text = el.innerHTML;
  
//     setInterval(function () {
//         text = text[text.length - 1] + text.substring(0, text.length - 1);
//         el.innerHTML = text;
//     }, 300)
// }

// {
//     let el = document.getElementById('text_3');
//     let text = el.innerHTML;
  
//     setInterval(function () {
//         text = text[text.length - 1] + text.substring(0, text.length - 1);
//         el.innerHTML = text;
//     }, 400)
// }

// Кнопка связаться (скролл)

    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event) {
      event.preventDefault();

      let $this = $(this),
          blockId = $this.data('scroll'),
          blockOffset = $(blockId).offset().top;

          $("html, body").animate({
              scrollTop: blockOffset
          }, 500);
  });

  // Goggle Map

  // Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

});
