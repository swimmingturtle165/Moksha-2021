
// variables
var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu
$header_top.find('a').on('click', function() {
    $(this).parent().toggleClass('open-menu');
});



// fullpage customization
$('#fullpage').fullpage({
    sectionsColor: ['#e8f3e2', '#B8B89F', '#272e38', '#5C832F', '#5C832F'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['home', 'pronites', 'events', 'sponsors', 'contact'],
    menu: '#menu',

    afterLoad: function(anchorLink, index) {
        $header_top.css('background', 'rgba(0, 47, 77, .3)');
        $nav.css('background', 'rgba(0, 47, 77, .25)');
        if (index == 5) {
            $('#fp-nav').hide();
        }
    },

    onLeave: function(index, nextIndex, direction) {
        if(index == 5) {
            $('#fp-nav').show();
        }
    },

    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
        if(anchorLink == 'lookback' && slideIndex == 1) {
            // $.fn.fullpage.setAllowScrolling(false, 'up');
            $header_top.css('background', 'transparent');
            $nav.css('background', 'transparent');
            $(this).css('background', '#374140');
            $(this).find('h2').css('color', 'white');
            $(this).find('h3').css('color', 'white');
            $(this).find('p').css(
                {
                    'color': '#DC3522',
                    'opacity': 1,
                    'transform': 'translateY(0)'
                }
            );
        }
    },

    onSlideLeave: function( anchorLink, index, slideIndex, direction) {
        if(anchorLink == 'lookback' && slideIndex == 1) {
            $.fn.fullpage.setAllowScrolling(true, 'up');
            $header_top.css('background', 'rgba(0, 47, 77, .3)');
            $nav.css('background', 'rgba(0, 47, 77, .25)');
        }
    }
});