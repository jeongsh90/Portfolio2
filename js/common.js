$(function(){
    $(".tab-menu li").on("click", function(){
        var index = $(this).index();
        $(".tab-menu li").removeClass("on");
        $(this).addClass("on");
        $(".tab-container .container-wrap").removeClass("on").eq(index).addClass("on");
    });
    
    $(".intro .intro-wrap .cont5 ul li a").on("click", function(e){
        e.preventDefault();
        var num = $(this).attr("nomber");
        var index = parseInt(num, 10) - 1;
       
        $(".intro").removeClass("on");
        $(".tab-menu li").removeClass("on").eq(index).addClass("on");
        $(".tab-container .container-wrap").removeClass("on").eq(index).addClass("on");
    });


    $('header .back-inter').on("click", function(){
        $('.intro').addClass('on')
    })
});


