// navbar şeklini scroll yardımı ile  değiştirme 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

// Sıkça Sorulan Soruları Gizle/Göster 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // icon değiştirme
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus"
        } else {
            icon.className = "fa-solid fa-plus";
        }
    })
    
})

// nav menusunu gizleyip gösterme 
const menu = document.querySelector(".nav__menu");
const menuButton = document.querySelector("#open-menu-button");
const closeButton = document.querySelector("#close-menu-button");


menuButton.addEventListener('click',  () => {
    menu.style.display = "flex";
    closeButton.style.display = "inline-block";
    menuButton.style.display = "none"; 
})


// nav menusunu kapatma
const closeNav = () => {
    menu.style.display = "none";
    closeButton.style.display = "none";
    menuButton.style.display = "inline-block";
}

closeButton.addEventListener('click', closeNav);


const teamsLink = document.getElementById('teamsLink');
const dropdownMenu = document.querySelector('.dropdown-menu');


teamsLink.addEventListener('mouseover', function() {
    dropdownMenu.style.display = 'block';
});


teamsLink.addEventListener('mouseout', function() {
    dropdownMenu.style.display = 'none';
});


dropdownMenu.addEventListener('mouseover', function() {
    dropdownMenu.style.display = 'block';
});


dropdownMenu.addEventListener('mouseout', function() {
    dropdownMenu.style.display = 'none';
});

// NBA logosunu seç
const nbaLogo = document.getElementById('nbaLogo');

// NBA logosuna tıklama olayı ekle
nbaLogo.addEventListener('click', function() {
    window.location.href = 'index.html'; // Ana sayfaya yönlendir
});
// formu kontrol eden kod
function validateForm() {
    var firstName = document.querySelector('input[name="first-name"]').value.trim();
    var lastName = document.querySelector('input[name="last-name"]').value.trim();
    var email = document.querySelector('input[name="email"]').value.trim();
    var message = document.querySelector('textarea[name="message"]').value.trim();
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (firstName === '') {
        alert("Please enter your First Name");
        return false;
    }

    if (lastName === '') {
        alert("Please enter your Last Name");
        return false;
    }

    if (email === '') {
        alert("Please enter your Email Address");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Invalid email address");
        return false;
    }

    if (message === '') {
        alert("Please enter a Message");
        return false;
    }

    return true; 
}









