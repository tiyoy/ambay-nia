$(document).ready(function(){
  $("#content").hide();
  $("#playbtn").click(function(){
    $("#popup").fadeOut();
    $("#content").fadeIn();
  })
})