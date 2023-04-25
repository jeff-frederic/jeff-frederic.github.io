

function scrollFunction() {
    let navbar =  document.getElementById("navbar");
    if (document.documentElement.scrollTop >= 50) {
        navbar.style = "padding-top: 10px; padding-bottom: 10px; backdrop-filter: blur(20px);";
    } else {
        navbar.style = "padding-top: 30px; padding-bottom: 30px; backdrop-filter: blur(0px);";
    }
}


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
  

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", scrollFunction);