window.onscroll = function() {
  var scroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  document.getElementById("navOverrideBs").style = "background: linear-gradient(0deg, rgba(251,181,96,"+ (scroll/scroll) +") -200%, rgba(236,71,70,"+ (scroll/scroll) +") 100%)";
  document.getElementById("homeSlideshow").style = "background: linear-gradient(0deg, rgba(251,181,96,"+(1 - (scroll / 100))+") 0%, rgba(236,71,70,"+(1 - (scroll / 100))+") 100%)";
};
