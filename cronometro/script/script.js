let m = document.querySelector('[data-time="minutes"]');
let s = document.querySelector('[data-time="seconds"]');
let min = 0;
let seg = 0;

let timer;
function iniciar() {
    timer = setInterval(()=>{
        ++seg;
        if(seg < 10) {
            s.innerText= '0' + seg
        } else if(seg < 60) {
            s.innerText= seg
        } else {
            s.innerText= '00'
        }
        if(seg == 60) {
            seg = 0
            clearInterval(timer);
            passarMinuto();
            iniciar();
        };
    }, 1000);

    start.setAttribute('disabled', '');
    pause.removeAttribute('disabled');
    reset.removeAttribute('disabled');
};

function passarMinuto() { 
    ++min;
    if(min < 10) {
        m.innerText= '0'+min
    } else {
        m.innerText= min
    };
};

function resetar () {
    clearInterval(timer);
    min = '00';
    seg = '00';
    s.innerText= seg;
    m.innerText= min;
    
    start.removeAttribute('disabled');
    reset.setAttribute('disabled', '');
    pause.setAttribute('disabled', '');
};

function pausar() {
    clearInterval(timer);
    pause.setAttribute('disabled', '');
    start.removeAttribute('disabled');
};

let start = document.querySelector('[data-start]');
let pause = document.querySelector('[data-pause]');
let reset = document.querySelector('[data-reset]');
start.addEventListener('click', iniciar);
pause.addEventListener('click', pausar);
reset.addEventListener('click', resetar);