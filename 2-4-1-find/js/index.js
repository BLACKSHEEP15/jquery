$('#LessonLs .lesson-title').click (function(){
    $(this).siblings('.lesson-desc').stop(1, 0).slideToggle();
    $(this).parent().siblings().find('.lesson-desc').slideUp();
});