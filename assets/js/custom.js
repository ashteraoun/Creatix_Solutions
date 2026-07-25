const processedbtn = document.querySelectorAll(".processed-btn")
const detailForm = document.querySelector(".form-wrap")
const forms = document.querySelectorAll(".detail-form")

var length = forms.length - 2
var step = 0

processedbtn.forEach(btn => {
    btn.addEventListener("click", e => {
        updateform(e)
    })
})

function updateform(e) {
    forms.forEach(f => {
        f.classList.remove("active")
    })
    if (e.target.classList.contains("next")) {
        if (step <= length) {
            step++
        }
    }
    else if (e.target.classList.contains("prev")) {
        if (step > 0) {
            step--
        }
    }

    else {
        console.log("non valid")
    }

    var form = detailForm.children[step]
    form.classList.add("active")

}

const developmentTabs_btns = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

developmentTabs_btns.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('activeTab')
        })
        developmentTabs_btns.forEach(tab => {
            tab.classList.remove('activeTab')
        })
        tab.classList.add('activeTab')
        target.classList.add('activeTab')
    })
})
$(".brands-slider").owlCarousel({
    autoPlay: 2000,
    navigation: true,
    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    slideSpeed: 300,
    navigation: false,
    loop: true,
    autoplayHoverPause: false,
    autoplayTimeout: 10,
    autoplaySpeed: 800,
    fluidSpeed: true,
    items: 6,
    itemsDesktop: [1024, 1],
    itemsDesktopSmall: [900, 4],
    itemsTablet: [600, 3],
    itemsMobile: [479, 3],
    margin: 0,
    pagination: false,
    responsive: {
        0: {
            items: 0
        },
        600: {
            items: 5
        },
        1400: {
            items: 5
        }

    }
});


$(document).ready(() => {
    if (findGetParameter('ModalClosed') !== null) {

        $('#myModal').removeClass('show').hide();
        $(".modal").addClass("lessindex");
    }
});
$(document).ready(function () {


    $('.get-quote').on('click', function () {
        console.log('clicked')
        $('#myModal').fadeIn();
        $(".modal").removeClass("lessindex");
        $(".modal").addClass("show");
    })

    $('.close').on('click', function () {
        $('#myModal').fadeOut();
        window.location.hash = '';
    })

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("header").addClass("sticky-header");
        } else {
            $("header").removeClass("sticky-header");
        }
    });

    $("li.dropdown-nav").hover(function () {
        $(this).children("ul").stop(true, false, true).slideToggle(400);
    });

    $("li.sub-dropdown").hover(function () {
        $(this).children("ul").stop(true, false, true).slideToggle(400);
    });

    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");

    $('[href="#"]').attr("href", "javascript:;");
    $('.menu-Bar').click(function () {
        $(this).toggleClass('open');
        $('.menuWrap').toggleClass('open');
        $('body').toggleClass('ovr-hiddn');
        $('body').toggleClass('overflw');
    });

    $('.index-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 825,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
        ]
    });

    $('.service-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
        ]
    });

    $('.tech-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 825,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
        ]
    });


    $('.service-slider2').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
        ]
    });

    $('.m-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 825,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
        ]
    });

    $('.img-scroll').mousemove(function (evt) {
        $('.img-box').each(function () {
            $(this).css("transform", 'translateX(' + -evt.pageX / 20 + 'px' + ')')
        });
    });

    $('.product-slid').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 825,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
        ]
    });

    $('.client-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 825,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
        ]
    });

    $('.event-slider').slick({
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        responsive: [
            {
                breakpoint: 825,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false

                }
            },
        ]
    });

    // counter javascript start
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    $('.count2').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    // counter javascript end

    $('ul.faq-ul li.active div').slideDown();
    $('ul.faq-ul li h4').click(function () {
        $('ul.faq-ul li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('ul.faq-ul li div').slideUp();
        $(this).parent('li').find('div').slideDown();
    });

    $('.faq-ul>li').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.fancybox-media').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            media: {}
        }
    });

    $('.searchBtn').click(function () {
        $('.searchWrap').addClass('active');
        $('.overlay').fadeIn('active');
        $('.searchWrap input').focus();
        $('.searchWrap input').focusout(function (e) {
            $(this).parents().removeClass('active');
            $('.overlay').fadeOut('active');
            $('body').removeClass('ovr-hiddn');

        });
    });

});


$(window).on('load', function () {
    var currentUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $('ul.menu li a').each(function () {
        var hrefVal = $(this).attr('href');
        if (hrefVal == currentUrl) {
            $(this).removeClass('active');
            $(this).closest('li').addClass('active')
            $('ul.menu li.first').removeClass('active');
        }
    })

});

// tabing
$('[data-targetit]').on('click', function (e) {
    $(this).addClass('current');
    $(this).siblings().removeClass('current');
    var target = $(this).data('targetit');
    $('.' + target).siblings('[class^="box-"]').hide();
    $('.' + target).fadeIn();
});


// sticky header
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('').addClass("box-visable");
    }
    else {
        $('').removeClass("box-visable");
    }
});


// slider additional js for tabbing
$("[data-targetit]").on("click", function (e) {
    $(".test").slick("setPosition");
});

var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

$(function () {
    $('.toggle-menu').click(function () {
        $('.exo-menu').toggleClass('display');

    });

});

$('.drop-btn').click(function () {
    $('.drop-btn').parent('.mega-menu-box').removeClass('show');
    $(this).parent('li, .mega-menu-box').toggleClass('show');

});
var owl = $('.main-carousel owl-theme');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true
});


// popup
$(".dispopup").click(function () {
    $('.signUpPoptwo').fadeIn();
    $('.overlay').fadeIn();
    ShowForm(this);
});


$(".signUpOpen").click(function () {
    $(".signUpPoptwo").fadeIn();
    $(".overlay").fadeIn();
    ShowForm(this);
});

$(".popupMain ,.closePoptwo ,.overlay").click(function () {
    $(".signUpPoptwo").fadeOut();
    $(".overlay").fadeOut();
    ShowForm(this);
});

function ShowForm(param) {
    if ($(param).attr('data-package') !== undefined) {
        $('#payment-form').removeClass('hide');
        $('#normal-form').addClass('hide');
        $('#package-price').val($(param).attr('data-price'));
        $('#package-plan').val($(param).attr('data-package'));
    }
    else {
        $('#payment-form').addClass('hide');
        $('#normal-form').removeClass('hide');
        console.log('normal');
    }
}

// popup
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

$(".dispopup").click(function (e) {
    console.log(e);
    $('.signUpPoptwo').fadeIn();

    let plan = $(e.target).attr('data-package'),
        plan_id = $(e.target).attr('data-package-id'),
        price = $(e.target).attr('data-price');
    if (plan === undefined) {
        $('#modal_info').removeClass('hide');
        $('#modal_type').addClass('hide');
    }
    else {
        $('#modal_info').addClass('hide');
        $('#modal_type').removeClass('hide');
        $('#package_type').val(plan);
        $('#package_id_order').val(plan_id);
        $('#package_price').val(price);
    }
    $('.overlay').fadeIn();
});

$('.popupMaintwo .closePoptwo').click(function () {
    $('.signUpPoptwo').fadeOut();
    $('.overlay').fadeOut();
});


$('.popup-triger').click(function () {
    $('.step-form').addClass("active");
});

$('.popup-down, .close-bt').click(function () {
    $('.step-form').removeClass("active");
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 10
        }
    }
})


$('.extra').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 825,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false
            }
        },
    ]
});

// Hide/Show Floating Form
$(document).ready(function () {
    var btnClickForm = '.outer-show';
    var showCls = 'show';
    var floatForm = '.overlayfloatingform';
    $(btnClickForm).click(function () {
        $('body').toggleClass(showCls);
        $('.floatingform-sec').toggleClass(showCls);
        $(floatForm).toggleClass(showCls);
    });

    $(".clickbutton").click(function () {
        $(floatForm).removeClass(showCls);
    });
});
// Hide/Show Floating Form

new WOW().init();

$(function () {
    var myLazyLoad = new LazyLoad({
        elements_selector: ".lazy"
    });
});

// function chatOpen() {
//     if (typeof (zE) !== 'undefined') {
//         zE.activate();
//     } else {
//         var zeScript = document.createElement('script');
//         zeScript.id = 'ze-snippet';
//         zeScript.src = 'https://static.zdassets.com/ekr/snippet.js?key=27eee9fe-94fd-465e-b8a4-8a6ad0827581';
//         document.head.appendChild(zeScript);

//         zeScript.onload = function () {
//             zE.activate();
//         };
//     }
// }


function chatOpen(){
    Tawk_API.toggle();

}

$(".chat").on("click", function (e) {

    Tawk_API.toggle();

});



$("#fromOne").validate({
rules: {
name: {
required: !0
},
email: {
required: !0,
email: !0
},
phone: {
minlength: 10,
number: !0,
required: !0
}
},
highlight: function (e, t, r) {
$(e).closest(".error").addClass("has-error")
},
unhighlight: function (e, t, r) {
$(e).closest(".error").removeClass("has-error")
},
errorPlacement: function (e, t) {
t.parent(".input-group").length || "checkbox" === t.prop("type") || "radio" === t.prop("type") ? e.insertAfter(t.parent()) : e.insertAfter(t)
},
submitHandler: function (e) {
$("#result").html(""), $("#fromOne-btn").val("Processing..."), $("#fromOne-btn").text("Processing..."), $("#fromOne-btn").prop("disabled", !0), console.log("testing");
e = $(e).serializeArray();
$.ajax({
url: "./mail.php",
type: "POST",
data: e,
success: function (e) {
    1 == (e = JSON.parse(e)).success && ($("#form-hide").hide(), window.location.href = "thankyou")
},
error: function () {
    $("#success").html('<h2 class="text-danger">There is error while submit</h2>')
}
})
}
}),

$("#fromTwo").validate({
rules: {
name: {
    required: !0
},
email: {
    required: !0,
    email: !0
},
phone: {
    minlength: 10,
    number: !0,
    required: !0
}
},
highlight: function (e, t, r) {
$(e).closest(".dis-error").addClass("has-error")
},
unhighlight: function (e, t, r) {
$(e).closest(".dis-error").removeClass("has-error")
},
errorPlacement: function (e, t) {
t.parent(".input-group").length || "checkbox" === t.prop("type") || "radio" === t.prop("type") ? e.insertAfter(t.parent()) : e.insertAfter(t)
},
submitHandler: function (e) {
$(".modal-signup-result").html(""), $("#fromTwo-btn").val("Processing..."), $("#fromTwo-btn").text("Processing..."), $("#fromTwo-btn").prop("disabled", !0), console.log("testing");
e = $(e).serializeArray();
$.ajax({
    url: "./mail.php",
    type: "POST",
    data: e,
    success: function (e) {
        1 == (e = JSON.parse(e)).success && ($("#form-hide").hide(), window.location.href = "thankyou")
    },
    error: function () {
        $(".modal-signup-result").html('<h2 class="text-danger">There is error while submit</h2>')
    }
})
}
})
$("#fromThree").validate({
rules: {
name: {
required: !0
},
email: {
required: !0,
email: !0
},
phone: {
minlength: 10,
number: !0,
required: !0
}
},
highlight: function (e, t, r) {
$(e).closest(".dis-error").addClass("has-error")
},
unhighlight: function (e, t, r) {
$(e).closest(".dis-error").removeClass("has-error")
},
errorPlacement: function (e, t) {
t.parent(".input-group").length || "checkbox" === t.prop("type") || "radio" === t.prop("type") ? e.insertAfter(t.parent()) : e.insertAfter(t)
},
submitHandler: function (e) {
$("#success3").html(""), $("#fromThree-btn").val("Processing..."), $("#fromThree-btn").text("Processing..."), $("#fromThree-btn").prop("disabled", !0), console.log("testing");
e = $(e).serializeArray();
$.ajax({
url: "./mail.php",
type: "POST",
data: e,
success: function (e) {
    1 == (e = JSON.parse(e)).success && ($("#form-hide").hide(), window.location.href = "thankyou")
},
error: function () {
    $("#success3").html('<h2 class="text-danger">There is error while submit</h2>')
}
})
}
}),
$("#fromFour").validate({
rules: {
name: {
    required: !0
},
email: {
    required: !0,
    email: !0
},
phone: {
    minlength: 10,
    number: !0,
    required: !0
}
},
highlight: function (e, t, r) {
$(e).closest(".dis-error").addClass("has-error")
},
unhighlight: function (e, t, r) {
$(e).closest(".dis-error").removeClass("has-error")
},
errorPlacement: function (e, t) {
t.parent(".input-group").length || "checkbox" === t.prop("type") || "radio" === t.prop("type") ? e.insertAfter(t.parent()) : e.insertAfter(t)
},
submitHandler: function (e) {
$(".modal-signup-result").html(""), $("#fromFour-btn").val("Processing..."), $("#fromFour-btn").text("Processing..."), $("#fromFour-btn").prop("disabled", !0), console.log("testing");
e = $(e).serializeArray();
$.ajax({
    url: "./mail.php",
    type: "POST",
    data: e,
    success: function (e) {
        1 == (e = JSON.parse(e)).success && ($("#form-hide").hide(), window.location.href = "thankyou")
    },
    error: function () {
        $(".modal-signup-result").html('<h2 class="text-danger">There is error while submit</h2>')
    }
})
}
})



// Get all <a> elements in the document
// const links = document.querySelectorAll('a');

// // Iterate over each link
// links.forEach(link => {
//     // Check if the href attribute starts with "tel:"
//     if (link.href.startsWith('tel:')) {
//         // Hide the link by setting its display style to none
//         link.style.display = 'none';
//     }
// });
