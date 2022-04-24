const openBtn = document.querySelector('.nav-btn-open');
const closeBtn = document.querySelector('.nav-btn-close');
const nav = document.querySelector('.head-nav');

openBtn.addEventListener('click', function() {
  nav.classList.add('open');
})

closeBtn.addEventListener('click', function() {
  nav.classList.remove('open');
})

function restoreNav() {
  if (window.innerWidth >= 500) {
    nav.classList.remove('open');
  }
}

window.onresize = restoreNav;