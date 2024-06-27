let header = $('.header');
    initGnb(header);

    function initGnb(header){
    let gnb = header.find('.header-gnb');
    let gnbMenu = gnb.find('.gnb-depth-1 .depth-1');
    let depthMenu = gnb.find('.gnb-depth-2');
    let maxHeight = calculateMaxHeight();

    if (window.innerWidth > 1024) {
        changeMenuHeight(maxHeight);
    }

    gnb.on('mouseenter focusin', function(){
        gnbOpen(header);
    })
    gnb.on('mouseleave focusout', function(){
        gnbClose(header);
    })

    gnbMenu.on('mouseenter focusin', function(){
        $(this).addClass('current');
    })
    gnbMenu.on('mouseleave focusout', function(){
        $(this).removeClass('current');
    })

    $(window).on('resize', function(){
        if (window.innerWidth > 1024) {
        maxHeight = calculateMaxHeight();
        changeMenuHeight(maxHeight);
        }
    });

    function gnbOpen(header){
        let headerHeight = maxHeight + 90;
        header.css("height", headerHeight + "px").addClass('open');
    }

    function gnbClose(header){
        header.removeClass('open').removeAttr("style");
    }

    function calculateMaxHeight(){
        let heights = [];
        depthMenu.each(function(){
        let height = $(this).innerHeight();
        heights.push(height);
        });
        let maxHeight = Math.max.apply(null, heights);
        return maxHeight;
    }

    function changeMenuHeight(height) {
        depthMenu.css("height", height + "px");
    }
    }

        document.addEventListener('DOMContentLoaded', function() {
        var sitemapBtn = document.querySelector('.sitemap_btn');

        sitemapBtn.addEventListener('click', function() {
            var activeCheckbox = document.querySelector('#active');

            activeCheckbox.checked = !activeCheckbox.checked;
        });
    });