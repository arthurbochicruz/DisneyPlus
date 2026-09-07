const buttons = document.querySelectorAll('.buttonForImages')
const buttonsTop = document.querySelectorAll('.buttonForImagesTop')
let imagemAtual = 1

 function trocarImagem() {

    let prefixo 
    if (window.innerWidth <= 1024) {
        prefixo = 'compose-responsiveImg'
    } else {
        prefixo = 'compose-img'
    }
 
    document.body.style.backgroundImage = `url('./images/${prefixo}${imagemAtual}.webp')`

    buttons.forEach((botao) => {
    botao.classList.remove('ativo') 

    if (botao.dataset.fundo == imagemAtual) {
        botao.classList.add('ativo')  
    }

})
    buttonsTop.forEach((botaoTop) => {
        botaoTop.classList.remove('ativo')

        if (botaoTop.dataset.fundo == imagemAtual) {
            botaoTop.classList.add('ativo')  
        } 
    })
}

trocarImagem()

const intervalo = setInterval(() => {

    imagemAtual ++

    if (imagemAtual > 4) {
        imagemAtual = 1
    } 

    trocarImagem()
}, 3400)


buttons.forEach((button)  => {

    button.addEventListener('click', () => {

        clearInterval(intervalo)
        imagemAtual = Number(button.dataset.fundo)
        trocarImagem()
    })
})

buttonsTop.forEach((buttonTop)  => {

    buttonTop.addEventListener('click', () => {

        clearInterval(intervalo)
        imagemAtual = Number(buttonTop.dataset.fundo)
        trocarImagem()
    })
})
