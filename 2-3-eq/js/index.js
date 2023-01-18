$('#ThumbLs > img').click(function(){
    const index = $(this).index();
    // $('#PicLs img').fadeOut();
    $('#PicLs img').eq(index).fadeIn().siblings().fadeOut();
})