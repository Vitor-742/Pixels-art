let paint = document.querySelector('#painting')

for (i = 0; i < 25; i++) {
    let pix = document.createElement('div')
    pix.className = 'pixel'
    paint.appendChild(pix)
}