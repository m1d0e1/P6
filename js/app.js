/// <reference path="typings/globals/jquery/index.d.ts" />
var counter=0;
$(function(){
    $("body").niceScroll({
        cursorcolor:"#1ABC9C",
        cursorwidth: "10px",
        cursorborder: "1px solid #1ABC9C"
    });
    $(".hover2").css("position","absolute");
    $("header").css("height", $(window).innerHeight());
    $(".slider").css("padding-top",$("header").innerHeight()/2 -$(".slider").height());
    $(".overlay").height($("header").height());
    $(window).resize(function(){
        $("header").css("height", $(window).innerHeight());
        $(".slider").css("padding-top",$("header").innerHeight()/2 -$(".slider").height());
        $(".overlay").height($("header").height());
    });

    //slider
    function slide(){
        $(".slider").css("padding-top",$("header").innerHeight()/2 -$(".slider").innerHeight());
        $(".right").on("click",function(){
            counter++;
            next();
            console.log(counter);
        });
        $(".left").on("click",function(){
            counter--;
            console.log(counter);
            if (counter < 0 ){counter = $(".slider").children().length-1;}
            $(".slide").css("transform", "translateX(-"+counter*100+"%)");
        });
    }
    function next(){
        if (counter == $(".slider").children().length){counter=0;}
        $(".slide").css("transform", "translateX(-"+counter*100+"%)");
    }
    slide();
    //Smooth Scroll
    $("nav li a").on("click",function(e){
        e.preventDefault();
        $(this).parent().addClass("active").siblings().removeClass("active");
        $("html").animate({
            scrollTop: $($(this).attr("href")).offset().top
        },500);
    });
    // Testimonial
    (function autoSlide(){
        $(".slider2 div.active").delay(3000).fadeOut(600,function(){
            $(this).removeClass("active").next().fadeIn(600).addClass("active");
            autoSlide();
            if($(this).is(":last-child")){
                $(this).removeClass("active").fadeOut(600,function(){
                    $(".slider2 div").eq(0).addClass("active").fadeIn(600);
                    autoSlide();
                });
            }
        });
    }());

    //shuffle
    function shuffle(){
        $("#port .container > span").each(function(){
            var btn = $(this);
            btn.click(function(){
                btn.addClass("active").siblings().removeClass("active");
                $(".imgs div").fadeOut(300);
                $(btn.data("filter")).delay(300).fadeIn(300);
            });
        });
    }
    shuffle();
});