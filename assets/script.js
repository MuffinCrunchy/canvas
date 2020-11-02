// Navigation Login dan Register
const bar = document.querySelector(".bar-header");
const nav = document.querySelector(".nav-header");
const points = document.querySelectorAll(".point-header");
bar.addEventListener('click', function(event) {
    if (nav.className === "nav-header") {
        nav.className = "nav-header-block";
        for (let point of points) {
            point.addEventListener('click', function(event) {
                nav.className = "nav-header";
            });
        }
    } else {
        nav.className = "nav-header";
    }
});


// Form Validation
const valids = document.querySelectorAll(".button");
for (let valid of valids) {
    valid.addEventListener('click', function(event) {
        if (valid.id === "button-login") {
            let email = document.forms["form-login"].email.value;
            let password = document.forms["form-login"].password.value;
            if (email == "") {
                alert("Silahkan isi nama anda!");
            }
            if (password == "") {
                alert("Silahkan isi password anda!");
            } else {
                alert("Selamat datang kembali");
            }
        } else {
            let firstName = document.forms["form-register"]["first-name"].value;
            let lastName = document.forms["form-register"]["last-name"].value;
            let email = document.forms["form-register"].email.value;
            if (firstName == "") {
                alert("Silahkan nama depan anda!");
            }
            if (lastName == "") {
                alert("Silahkan isi nama belakang anda!");
            }
            if (email == "") {
                alert("Silahkan isi email anda!");
            } else {
                alert("Selamat datang " + firstName + " " + lastName );
            }
        }
    });
}


// Slideshow Login
let slideIndex = 1;
var i;
const slides = document.querySelectorAll(".slide");
const buttons = document.querySelectorAll(".clicker");

function updateDisplay(slideIndex) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

updateDisplay(slideIndex);

for (let button of buttons) {
    button.addEventListener('click', function(event) {

        const target = event.target;
        if (target.classList.contains('next')) {
            slideIndex = slideIndex + 1;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
        }
        if (target.classList.contains('prev')) {
            slideIndex = slideIndex - 1;
            if (slideIndex < 1) {
                slideIndex = slides.length;
            }
        }
        if (target.classList.contains('sign-in')) {
            slideIndex = 1;
        }
        if (target.classList.contains('sign-up')) {
            slideIndex = 2;
        }
        updateDisplay(slideIndex);
    });
}