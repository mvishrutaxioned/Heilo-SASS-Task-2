$(document).ready(function() {
    console.log('ready')

    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true
    });

    $('#menu').click(() => {
        $('nav').addClass('showNav')
        $('html, body').css("overflow", "hidden")
    })

    $('#close').click(() => {
        $('nav').removeClass('showNav')
        $('html, body').css("overflow", "visible")
    })

    // close nav functionality by clicking outside
    $(document).mouseup(function(e) {
        var container = $("nav");
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            $('nav').removeClass('showNav')
            $('html, body').css("overflow", "visible")
        }
    });
})