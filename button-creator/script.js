const form = document.forms[0]
const btn = document.querySelector('.btn')
const css = document.querySelector('.css')

const cssButton = {
    element: btn,
    text(value) {
        this.element.innerText= value
    },
    color(value) {
        this.element.style.color= value
    },
    backgroundColor(value) {
        this.element.style.backgroundColor= value
    },
    height(value) {
        this.element.style.height= value + 'px'
    },
    width(value) {
        this.element.style.width= value + 'px'
    },
    border(value) {
        this.element.style.border= value
    },
    borderRadius(value) {
        this.element.style.borderRadius= value + 'px'
    },
    fontFamily(value) {
        this.element.style.fontFamily= value
    },
    fontSize(value) {
        this.element.style.fontSize= value + 'rem'
    },
}   

function change(e) {
    const value = e.target.value;
    const name = e.target.name;
    cssButton[name](value)
    cssText()
    storange(name, value)
}

function cssText() {
    css.innerHTML= '<span>' + btn.style.cssText.split('; ').join('</span><span>')
}

function storange(name, value) {
    localStorage[name]= value
}

function setStorange() {
    const properties = Object.keys(localStorage)
    properties.forEach(propertie => {
        form.elements[propertie].value = localStorage[propertie]
        cssButton[propertie](localStorage[propertie])
    })
    cssText()
}
setStorange()

form.addEventListener('change', change)