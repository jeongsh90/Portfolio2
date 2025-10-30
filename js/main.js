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


$(function(){
    function initCustomScroll($container){
        var $scrollWrap = $container.find('.scroll');
        var $scrollBar = $scrollWrap.find('span');

        var isDragging = false;
        var startY = 0;
        var startTop = 0;
        
        $container.on('scroll', function(){
            if (isDragging) return;

            var scrollTop = $container.scrollTop();
            var scrollHeight = $container[0].scrollHeight;
            var clientHeight = $container.innerHeight();

            var visibleRatio = clientHeight / scrollHeight;
            var barHeight = Math.max(visibleRatio * $scrollWrap.height(), 30);
            var maxMove = $scrollWrap.height() - barHeight;
            var scrollRatio = scrollTop / (scrollHeight - clientHeight);

            $scrollBar.css({
                height: barHeight + 'px',
                transform: 'translateY(' + (scrollRatio * maxMove) + 'px)'
            });
        });

        // ✅ 드래그 시작
        $scrollBar.on('mousedown', function(e){
            isDragging = true;
            startY = e.pageY;
            startTop = parseFloat($scrollBar.css('transform').split(',')[5]) || 0;
            $('body').addClass('no-select');
            e.preventDefault();
        });

        // ✅ 드래그 중
        $(document).on('mousemove', function(e){
            if (!isDragging) return;

            var deltaY = e.pageY - startY;
            var newY = startTop + deltaY;

            var scrollHeight = $container[0].scrollHeight;
            var clientHeight = $container.innerHeight();
            var visibleRatio = clientHeight / scrollHeight;
            var barHeight = Math.max(visibleRatio * $scrollWrap.height(), 30);
            var maxMove = $scrollWrap.height() - barHeight;

            newY = Math.max(0, Math.min(newY, maxMove));
            $scrollBar.css('transform', 'translateY(' + newY + 'px)');
            var scrollRatio = newY / maxMove;
            var scrollTop = scrollRatio * (scrollHeight - clientHeight);
            $container.scrollTop(scrollTop);
        });

        $(document).on('mouseup', function(){
            if (isDragging) {
                isDragging = false;
                $('body').removeClass('no-select');
            }
        });

        // 초기화
        $container.trigger('scroll');
    }

    // ✅ 스크롤바를 적용할 컨테이너들
    initCustomScroll($('.Profile'));
    initCustomScroll($('.Introduction'));
});
