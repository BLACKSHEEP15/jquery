const $content = $('#Content');
const $BtnLg = $('#BtnLg');


$BtnLg.click(function () {
    $('#Content').css({
        'font-size': 20
    });
});

$('#BtnSm').click(function () {
    $content.css('font-size', 15);
});