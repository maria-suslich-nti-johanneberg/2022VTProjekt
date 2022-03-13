// Denna fil skall innehålla JavaScript (JS)

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}


const nav = document.querySelector('.navlinks')
const burger = document.querySelector('.burger')

function toggleMeny(){
    nav.classList.toggle('navActive')
    burger.classList.toggle('toggle')

}

burger.addEventListener('click', toggleMeny)