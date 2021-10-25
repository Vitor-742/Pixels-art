let paint = document.querySelector('#pixel-board')

for (i = 1; i <= 25; i++) {
    let pix = document.createElement('div')
    pix.className = 'pixel'
    paint.appendChild(pix)
    if (i % 5 == 0) {
        let bar = document.createElement('br')
        paint.appendChild(bar)
    }
}

function pincel(event) {
    let atpin = document.querySelector('.selected')
    atpin.className = 'color'
    event.target.className = 'color selected'
}


let cor = document.querySelectorAll('.color')
for (i of cor) {
    i.addEventListener('click', pincel)
}

function colorir(e) {
    let atpin = document.querySelector('.selected')
    if (atpin == document.querySelector('#black')) {
        e.target.style.background = 'black'
    } else if (atpin == document.querySelector('#blue')) {
        e.target.style.background = 'blue'
    } else if (atpin == document.querySelector('#green')) {
        e.target.style.background = 'green'
    } else if (atpin == document.querySelector('#red')) {
        e.target.style.background = 'red'
    }
    /* console.log(atpin) */
    /* e.target.style.background = 'red' */
}

let pix2 = document.querySelectorAll('.pixel')
for (i of pix2) {
    i.addEventListener('click', colorir)
}

function limpar() {
    let pix3 = document.querySelectorAll('.pixel')
    for (i of pix3) {
        i.style.background = 'white'
    }
}

let btn = document.querySelector('#clear-board')
btn.addEventListener('click', limpar)