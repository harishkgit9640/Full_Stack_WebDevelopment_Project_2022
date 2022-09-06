$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        } if (this.scrollY > 200) {
            $('.back2Top').addClass('active');
        } else {
            $('.back2Top').removeClass('active');
        }
    });
    $('.back2Top').click(function () {
        $('html').animate({ scrollTop: 0 });
    })

    $('#icon').click(function () {
        $('ul').toggleClass('show');
        $('#icon i').toggleClass('active');
    });
});