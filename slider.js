const images = [
    'images/cover-1.png',
    'images/cover-2.jpg',
    'images/cover-3.jpg'

]
let img = document.getElementById('carosel');
// img.setAttribute('height', 600);
// img.setAttribute('width', 1360);

let image = 0;
setInterval(() => {
    if (image === images.length) {
        image = 0;
    }
    img.setAttribute('src', (images[image]));
    image++;

}, 2000)