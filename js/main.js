$(document).ready(function () {
    $('.Portfolio .slide03 .link').on('click', function () { $('#port-03').addClass('on'); });
    $('.Portfolio .slide04 .link').on('click', function () { $('#port-04').addClass('on'); });

    $('.modal-type1 .close').on('click', function(){ $('.modal-type1').removeClass('on') });
    

    $('#port-03 .menu a').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('#port-03 .menu a').removeClass('on');
        $('#port-03 .container').removeClass('on');
        $(this).addClass('on');
        $('#port-03 .container').eq(idx).addClass('on');
    });

    $('#port-03').on('click', '.container.on .content', function(){ $(this).toggleClass('on'); });
});