//= jquery.jscrollpane.js

$(document).ready(function(){
    PopUpHide();
    // $('.scroll-block').jScrollPane();
    $('.scroll-block').each(function () {
        console.log('start scrollpane');
        $(this).jScrollPane(
            {
              contentHeight: '0px'
            }
        );
      });
      $(window).resize(function() {
        $('.scroll-block').jScrollPane(
            {
              contentHeight: '0px'
            }
        );
        console.log('resize scrollpane');
      });
});
function PopUpShow(){
    $("#popup1").show();
}
function PopUpHide(){
    $("#popup1").hide();
}
$(function () {
    $('.side-bar-menu-button').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('.side-bar-opened-menu').toggleClass('show');
    });
});

$(function () {
    $('.side-bar-opened-menu-production-a').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('.side-bar-opened-menu-production-li').toggleClass('show');
    });
});

$(function () {
    $('.side-bar-opened-menu-cross-button-link').click(function (e) { 
        e.preventDefault();
        $(this).parent().parent().parent().find('.side-bar-opened-menu').toggleClass('show');
    });
});

$(function () {
    $('.letter-gul-block-a').click(function (e) { 
        e.preventDefault();
        $(this).parent().parent().find('.hiden-letters').toggleClass('show');
    });
});

$(function () {
    $('.side-bar-letter-gul-block-a').click(function (e) { 
        e.preventDefault();
        $(this).parent().parent().find('.side-bar-hiden-letters').toggleClass('show');
    });
});