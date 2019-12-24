$(function() {

    // let header = $('#header'),
    //     statH = $("#stat").innerHeight(),
    //     quoteH = $("#quote").innerHeight(),
    //     footer__connectionH = $("#footer__connection").innerHeight(),
    //     scrollOffset = $(window).scrollTop();

    //     checkScroll(scrollOffset);

    //     $(window).on('scroll', function () {
    
    //         scrollOffset = $(this).scrollTop();
    //         checkScroll(scrollOffset);
    
    //       });
    
    
    //     function checkScroll(scrollOffset) {
    
    
    //         if (scrollOffset >= quoteH && scrollOffset < footer__connectionH) {
            
    //         }
    //     }


    let header = $('#header'),
    introH = $("#intro").innerHeight(),
    quoteH = $("#quote").innerHeight(),
    scrollOffset = $(window).scrollTop();

/* Fixed Header */

checkScroll(scrollOffset);

$(window).on('scroll', function () {

    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);

  });


function checkScroll(scrollOffset) {


    if (scrollOffset >= introH) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }

    if (scrollOffset >= quoteH) {

        $('.stat__number').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function(now){
                    $(this).text(Math.ceil(now));
                }
            });
        });

    }
}
        
});