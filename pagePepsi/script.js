var pepsi = document.querySelector('#pepsi')

document.querySelector('#pepsi1').addEventListener('click', function(){
    document.body.style.background='#0261bf'
    pepsi.setAttribute('src', 'img/pepsi001.png')
})

document.querySelector('#pepsi2').addEventListener('click', function(){
    document.body.style.background='#e60c2c'
    pepsi.setAttribute('src', 'img/pepsi002.png')
})

document.querySelector('#pepsi3').addEventListener('click', function(){
    document.body.style.background='#222222'
    pepsi.setAttribute('src', 'img/pepsi003.png')
})