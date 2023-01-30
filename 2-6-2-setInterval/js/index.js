let num = 1;


function todo(){
    if(num<5){
    num += 1;
    }else{
        num = 1;  
    }
    $('#Pic').attr('src',`./images/photo${num}.jpg`)
    console.log(num)
}


setInterval(todo,500);