$(document).ready(function () {
    $('nav li').hide();
    $('nav').hover(
        function() {
            $('nav li').slideDown(100);
        }, function () {
            $('nav li').slideUp(100);
        }
    )
});
