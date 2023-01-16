
$('#BtnRight').click(function () {
    $('#Rocket').stop(1 , 0).animate({left:'+=100'},500)
});

$('#BtnLeft').click(function () {
    $('#Rocket').stop(1 , 0).animate({left:'-=100'},500)
});

