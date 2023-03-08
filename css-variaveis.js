const rengeEspacamento = document.getElementById('renge1')
const rengeBlur = document.getElementById('renge2')
const inputCor = document.getElementById('inpCor')


function espMouse(){
    var espValor = rengeEspacamento.value + 'px'
    document.documentElement.style.setProperty('--padding-img', espValor);
    console.log(espValor)
}

function blurMouse(){
    var blurValor = rengeBlur.value + 'px'
    document.documentElement.style.setProperty('--blur-img', blurValor)
}

inputCor.addEventListener('input', function(){
    corValor = inputCor.value
    document.documentElement.style.setProperty('--cor-fundo', corValor)
})//uso do addEventListener para uma outra variedade de eventos, que não tem em HTML

