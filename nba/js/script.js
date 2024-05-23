const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// İlgili elementleri seç
const submenuTrigger = document.querySelector('.submenu');
const submenuContent = document.querySelector('.submenu-content');

// Alt menü açılırken
submenuTrigger.addEventListener('mouseover', function() {
    submenuContent.style.display = 'block';
});

// Fare alt menünün dışına çıkınca alt menü kapanır
submenuContent.addEventListener('mouseleave', function() {
    submenuContent.style.display = 'none';
});
