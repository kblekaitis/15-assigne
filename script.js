// TABAI - PERSIJUNGIMAS

var tabs = document.getElementsByClassName("tab")
var buttons = document.getElementsByTagName("button")

// Paslepia visus tabus pradžioje
for (var x of tabs) {
    x.style.display = "none"
}

function changeHeader(event, id){
    // Paslepia ir nuima animaciją tabams
    for (var x of tabs) {
        x.style.display = "none"
        x.classList.remove("tabAnimation")
    }

    // Parodo konkretų tab pagal id
    document.getElementById(id).style.display = "block"

    // Prideda animaciją po 100ms
    setTimeout(function(){
        document.getElementById(id).classList.add("tabAnimation")
    }, 100)

    // Pašalina mygtukams klasę
    for (var x of buttons) {
        x.classList.remove("selected")
    }

    // Prideda konkrečiam mygtukui klasę
    event.currentTarget.classList.add("selected")
}

// 1 TABAS - SLIDES

var slides = document.getElementsByClassName("slider__slide");
var navlinks = document.getElementsByClassName("slider__navlink");
var currentSlide = 0;

document.getElementById("nav-button--next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("nav-button--prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})

$(document).foundation();