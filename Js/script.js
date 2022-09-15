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

    // strings: ["HK Solution", "Digital World", "Social Media", "Branding", "Graphic Design"],

    // Hero Section
    let typed = new Typed(".typed_1", {
        strings: ["Full Stack Developer", "Graphic Designer", "Web Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Hero Section
    let typed1 = new Typed(".typed_2", {
        strings: ["Graphic Designer", "Web Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});