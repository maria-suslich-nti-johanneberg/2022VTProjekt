// Denna fil skall innehålla JavaScript (JS)

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.fontSize = "17px";
  } else {
    document.getElementById("navbar").style.padding = "10px 1px";
    document.getElementById("logo").style.fontSize = "25px";
  }
}


const nav = document.querySelector('.navlinks')
const burger = document.querySelector('.burger')

function toggleMeny(){
    nav.classList.toggle('navActive')
    burger.classList.toggle('toggle')

}

burger.addEventListener('click', toggleMeny)