$(function () {

    // PC 화면 내 메뉴바
    $(".menu>li").on({
        mouseover: function () {
            // $(".submenu",this).css({display:'block'});
            // slideDown(); 높이값 늘리면서 display:none > block변경
            $('.submenu', this).stop().slideDown();
        },
        mouseout: function () {
            // $(".submenu",this).css({display:'none'});
            // slideUp(); 높이값 줄이면서 display:block > none변경
            $('.submenu', this).stop().slideUp();
        }
    });

    // 태블릿, 모바일 화면 내 메뉴바 (햄버거바)
    $(".ham").click(function () {
        $(".ham_menu").stop().animate({ right: '0px' });
    })

    $(".close").click(function () {
        $(".ham_menu").stop().animate({ right: '-350px' });
    });

    $("#nav ul.sub").hide();
    $("#nav ul.m_menu li").click(function () {
        $("ul", this).slideToggle("fast");
    });

    // section01 자동차 선택
    $(".t1").click(function () {
        $(".c1").stop().fadeIn();
        $(".cars").find("figure").not(".c1").fadeOut();
    });

    $(".t2").click(function () {
        $(".c2").stop().fadeIn();
        $(".cars").find("figure").not(".c2").fadeOut();
    });

    $(".t3").click(function () {
        $(".c3").stop().fadeIn();
        $(".cars").find("figure").not(".c3").fadeOut();
    });

    $(".t4").click(function () {
        $(".c4").stop().fadeIn();
        $(".cars").find("figure").not(".c4").fadeOut();
    });


    AOS.init();
});