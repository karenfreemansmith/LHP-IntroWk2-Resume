$(document).ready(function(){
  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-theme");
  });
  $("button#neon").click(function() {
    $("body").removeClass();
    $("body").addClass("neon-theme");
  });
  $("button#pastel").click(function() {
    $("body").removeClass();
    $("body").addClass("pastel-theme");
  });
  $("button#classic").click(function() {
    $("body").removeClass();
    $("body").addClass("classic-theme");
  });
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-theme");
  });
});
