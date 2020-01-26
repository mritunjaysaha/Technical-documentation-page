$(function() {
    $('.list-group li a').click(function() {
       $('.list-group li').removeClass();
       $($(this).attr('href')).addClass('active');
    });
 });