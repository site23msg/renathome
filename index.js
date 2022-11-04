var autoPlayVideo = document.getElementById("ocScreencapVideo");
var bounding = autoPlayVideo.getBoundingClientRect();
autoPlayVideo.oncanplaythrough = function() {
    autoPlayVideo.muted = true;
    autoPlayVideo.removeAttribute('controls');
    autoPlayVideo.play();
}
//Aos initialization

try{
AOS.init();
console.log("Succes")}
catch(e) {
    console.log(e);
}

document.addEventListener('alpine:init', () => {
    Alpine.data('slider', () => ({
        currentIndex: 1,
        images: [
            '/src/3.jpg',
            '/src/4.jpg',
            '/src/5.jpg',
            '/src/6.png'
        ],
        back() {
            if (this.currentIndex > 1) {
                this.currentIndex = this.currentIndex - 1;
            }
        },
        next() {
            if (this.currentIndex < this.images.length) {
                this.currentIndex = this.currentIndex + 1;
            } else if (this.currentIndex <= this.images.length){
                this.currentIndex = this.images.length - this.currentIndex + 1
            }
        },
    }))
})
var map = L.map('map').setView([47.500, 19], 13);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);
map.attributionControl.setPrefix(false);

const marker = L.marker([47.500, 19]).addTo(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(`You clicked the map at ${e.latlng.toString()}`)
        .openOn(map);
}

map.on('click', onMapClick);

