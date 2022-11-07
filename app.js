// Selected anchor tags

const homeAnchor = document.getElementById("homeanchor");
const aboutAnchor = document.getElementById("aboutanchor");
const galleryAnchor = document.getElementById("galleryanchor");
const bookingAnchor = document.getElementById("bookinganchor");
const contactAnchor = document.getElementById("contactanchor");

// Selected sections

const homeSection = document.getElementById("home")
const aboutSection = document.getElementById("about")
const gallerySection = document.getElementById("gallery")
const bookingSection = document.getElementById("booking")
const contactSection = document.getElementById("contact")

// Hero section text

const welcomeText = document.querySelector('#welcome-text')

// Images for popup

document.querySelectorAll('.img-container img').forEach( image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display='block';
        document.querySelector('body').classList.add('overflowyhidden')
        document.querySelector('.popup-image img').src = image.getAttribute('src')
    }
})

// Scrollto top after hit the bottom of the page

const scroll = document.getElementById('scrollTotop');

window.addEventListener('scroll', () => {
    console.log(document.body.offsetHeight)
    console.log(window.pageYOffset)
    if (window.pageYOffset >= 2000) {
        scroll.classList.remove("translate-y-96");
        scroll.classList.add("translate-y-0", "duration-700", "ease-linear");
      } else {
        scroll.classList.add("translate-y-96");
      }
})

function scrollToTop() {
    try {
    homeSection.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    });
    }
    catch (e) {
        console.log(e)
    }
}

scroll.addEventListener('click',scrollToTop);

document.querySelector('.popup-image span').addEventListener('click', () => {
    document.querySelector('.popup-image').style.display='none';
    document.querySelector('body').classList.remove('overflowyhidden')
})


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
