const $advItems =$('#AdvLs .adv-item');
const duration = 400
$advItems.hover(function(){
    $(this).stop(1, 0).animate({top:0,}, duration)
    $(this).siblings().stop(1, 0).animate({top:118}, duration);
},function(){
    $advItems.stop(1, 0).animate({top:166}, duration);
});