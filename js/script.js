/* REVEAL SCROLL ANIM */

function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

window.addEventListener("scroll", reveal);

/* BTN MOBILE */

const nav = document.querySelector('#navbar')

function menu(){
    nav.classList.toggle('active')
}

window.onscroll = () => {
    nav.classList.remove('active')
}