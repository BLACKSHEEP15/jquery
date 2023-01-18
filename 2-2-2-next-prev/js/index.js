const $advItems =$('#AdvLs .adv-item');
const duration = 400


$advItems.hover(over,out);


function over(){
    $(this).stop(1, 0).animate({top:0,}, duration)
    $(this).prev().stop(1, 0).animate({top:118}, duration);
    $(this).next().stop(1, 0).animate({top:118}, duration);
}

function out(){
    $advItems.stop(1, 0).animate({top:166}, duration);
}