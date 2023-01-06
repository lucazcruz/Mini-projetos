const form = document.forms[0]
const css = document.querySelector('.css')
const btn = document.querySelector('.btn')

form.addEventListener('change', handleChange)
function handleChange(e) { 
    const nome = e.target.name
    const valor = e.target.value
    handleStyle[nome](valor)
    handleCss()
    saveValues(nome, valor)
    
}

function handleCss() {
    css.innerHTML = '<span>' + btn.style.cssText.split('; ').join('</span><span>');
}


function saveValues(nome, valor) {
    localStorage[nome] = valor
}

function storange() {
    const properties = Object.keys(localStorage)
    properties.forEach(propertie => {
        form.elements[propertie].value = localStorage[propertie]
        handleStyle[propertie](localStorage[propertie])
    })
    handleCss()
}

storange()

const handleStyle = {
    text(valor) {
        btn.innerText= valor
    },
    color(valor) {
        btn.style.color= valor
    },
    backgroundColor(valor) {
        btn.style.background= valor
    },
    height(valor) {
        btn.style.height= valor + 'px'
    },
    width(valor) {
        btn.style.width= valor + 'px'
    },
    border(valor) {
        btn.style.border= valor
    },
    borderRadius(valor) {
        btn.style.borderRadius= valor + 'px'
    },
    fontFamily(valor) {
        btn.style.fontFamily= valor
    },
    fontSize(valor) {
        btn.style.fontSize= valor + 'rem'
    }
}