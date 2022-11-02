const homeAnchor = document.getElementById("homeanchor");
const aboutAnchor = document.getElementById("aboutanchor");
const galleryAnchor = document.getElementById("galleryanchor");
const bookingAnchor = document.getElementById("bookinganchor");
const contactAnchor = document.getElementById("contactanchor");

const homeSection = document.getElementById("home")
const aboutSection = document.getElementById("about")
const gallerySection = document.getElementById("gallery")
const bookingSection = document.getElementById("booking")
const contactSection = document.getElementById("contact")

const welcomeText = document.querySelector('#welcome-text')

const welcomeTexts = ['Welcome', 'Wilkommen', 'Üdvözöllek']

let counter = 0;


window.addEventListener('load', () => {
    function display () {
        if(counter < welcomeTexts.length) {
            welcomeText.innerHTML = welcomeTexts[counter]
            counter++;
        } else {
            counter = 0;
        }
    }
    setInterval(display,2000)
})

homeAnchor.addEventListener('click', (e) => {
    e.preventDefault();
    homeSection.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    });
})

aboutAnchor.addEventListener('click', (e) => {
    e.preventDefault();
    aboutSection.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    });
})

galleryAnchor.addEventListener('click', (e) => {
    e.preventDefault();
    gallerySection.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    });
})

contactAnchor.addEventListener('click', (e) => {
    e.preventDefault();
    contactSection.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    });
})

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");


const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const body = document.querySelector("body");


const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    body.classList.add("overflowyhidden");
  };

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    body.classList.remove("overflowyhidden")
};

closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);