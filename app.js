const homeAnchor = document.getElementById("homeanchor");
const aboutAnchor = document.getElementById("aboutanchor");
const galleryAnchor = document.getElementById("galleryanchor");
const contactAnchor = document.getElementById("contactanchor");

const homeSection = document.getElementById("home")
const aboutSection = document.getElementById("about")
const gallerySection = document.getElementById("gallery")
const contactSection = document.getElementById("contact")

homeAnchor.addEventListener('click', (e) => {
    e.preventDefault();
    homeSection.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    });
})

aboutAnchor.addEventListener('click', (e) => {
    e.preventDefault();
    homeSection.scrollIntoView({
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
