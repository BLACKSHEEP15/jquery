let num = 1;
let picInterval;
const duration = 200;


function doNext (){
    if (num < 24){
        num += 1;
    } else{
        num = 1;
    }

    $('#Pic').attr('src', `./images/pic${num}.jpg`);
}

picInterval = setInterval(doNext,duration);


$('#BtnPause').click(function(){
    clearInterval(picInterval);
})

$('#BtnPlay').click(function(){
    clearInterval(picInterval);
    picInterval = setInterval(doNext,duration);
})