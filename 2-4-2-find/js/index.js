const $naviItems = $('#NaviLs > li');

$naviItems.hover(function () {
    $(this).find('ul').stop(1, 0).slideDown();
}, function () {
    $(this).find('ul').stop(1, 0).slideUp();
});