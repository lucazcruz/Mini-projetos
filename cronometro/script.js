// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

let start = document.querySelector('[data-start]')
let pause = document.querySelector('[data-pause]')
let reset = document.querySelector('[data-reset]')
let m = document.querySelector('[data-time="minutes"]')
let s = document.querySelector('[data-time="seconds"]')
let minutos = 0
let segundos = 0

start.addEventListener('click', comecar)
function comecar() {
    pause.addEventListener('click', pausar)
    reset.addEventListener('click', resetar)
    
    let cronometro = setInterval(()=>{
        let seg = ++segundos
        if(seg.toString().length === 1) {
            s.innerText= '0'+seg
        } else if(segundos < 60) {
            s.innerText= seg
        } else {
            s.innerText= '00'
        }
        if(segundos == 60) {
            segundos = 0
            clearInterval(cronometro)
            passarMinuto()
            comecar()
        }
    }, 1000)
    function resetar () {
        clearInterval(cronometro)
        minutos = '00'
        segundos = '00'
        s.innerText= segundos
        m.innerText= minutos
    }
    function pausar() {
        clearInterval(cronometro)
    }
    function passarMinuto() { 
        let min = ++minutos
        if(min.toString().length === 1) {
            m.innerText= '0'+min
        } else {
            m.innerText= min
        }
    }
}