let paint = document.querySelector('#pixel-board')

for (i = 1; i <= 25; i++) {
    let pix = document.createElement('div')
    pix.className = 'pixel'
    paint.appendChild(pix)
    if (i%5 ==0) {
        let bar = document.createElement('br')
        paint.appendChild(bar)
    }
}

function pincel(event) {
    let atpin = document.querySelectorAll('.selected')[0]
    atpin.className = 'color'
    event.target.className = 'color selected'
}


let cor = document.querySelectorAll('.color')
for (i of cor) {
    i.addEventListener('click', pincel)
}

function colorir(e) {
    e.target.style.background = 'red'
}

let pix2 = document.querySelectorAll('.pixel')
for (i of pix2) {
    i.addEventListener('click', colorir)
}