var entradaValor = 0 
var saidaValor = 0

document.getElementById('btn').addEventListener('click', adicionar);
function adicionar() { 
    // Adicionar novas entradas e saidas
    var nome = document.querySelector('#nome')
    var valor = document.querySelector('#valor')
    var tipo = document.querySelector('#tipo')
    var itens = document.querySelector('#itens')
    var item = document.createElement('li')
    item.setAttribute('class', 'item')
    // Cabeçalho com todas a soma das entradas e saidas
    var total = document.querySelector('#total')
    var entrada = document.querySelector('#entrada')
    var saida = document.querySelector('#saida')
    if (tipo.value == 'entrada') {
        entradaValor += Number(valor.value)
        entrada.innerText= entradaValor
        src = 'arrow-up.svg'
    } else if (tipo.value == 'saida') {
        saidaValor += Number(valor.value)
        saida.innerHTML= saidaValor
        src = 'arrow-down.svg'
    }
    total.innerHTML= entradaValor - saidaValor
    item.innerHTML = `
    <span>${nome.value}</span>
    <span>R$ ${valor.value}</span>
    <img src="svg/${src}" width="24" height="24">
    <img class="delete" src="svg/trash-2.svg">`  
    if (nome.value == '' || valor.value == '') {
        alert('[ERROR] Preencha todos os campos')
    } else {
        itens.appendChild(item)
    }
    nome.value = ''
    valor.value = ''
    nome.focus()
}

document.querySelector('body').addEventListener('click', remove)
function remove(e) {
    if (e.target.getAttribute('class') === 'delete') {
        console.log(e.target.parentElement.remove())
    }
}