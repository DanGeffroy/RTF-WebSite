$(document).ready(function(){

  $("#button").click(function() {
    scrollToAnchor('anchor');
  });
});
function scrollToAnchor(aid){
  var aTag = $("a[id='"+ aid +"']");
  $('html,body').animate({scrollTop: aTag.offset().top},'slow');
};
