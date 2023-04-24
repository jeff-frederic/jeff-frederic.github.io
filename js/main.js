window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
    document.getElementById("navbar").style = "backdrop-filter: blur(20px); height: 60px;";
  } else {
    document.getElementById("navbar").style = "backdrop-filter: none; height: 100px;";
  }
}