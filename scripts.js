window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("head").classList.add("head-small");
    } else {
        document.getElementById("head").classList.remove("head-small");
    }
  }

