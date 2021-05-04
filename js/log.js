$(document).ready(function() {
 // icon X  عندما نضغط عال
 // يتم حذف ال card  
 $(".remove").click(function () {
        $(this).parents('.card').hide(); 
    });
});