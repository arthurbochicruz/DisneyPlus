const buttons = document.querySelectorAll('.buttonForImages')
const btn1 = document.getElementById('.btn1')
const imagens = ['compose-img1', 'compose-img2', 'compose-img3', 'compose-img4']
let imagemAtual = 1

 function trocarImagem() {
 
    document.body.style.backgroundImage = `url('./images/compose-img${imagemAtual}.webp')`

    buttons.forEach((botao) => {
    botao.classList.remove('ativo') 

    if (botao.dataset.fundo == imagemAtual) {
        botao.classList.add('ativo')  
    }
})
}
trocarImagem()

const intervalo = setInterval(() => {

    imagemAtual ++

    if (imagemAtual > 4) {
        imagemAtual = 1
    } 

    //document.body.style.backgroundImage = `url('./images/compose-img${imagemAtual}.webp')`
    trocarImagem()
}, 3400)


buttons.forEach((button)  => {

    button.addEventListener('click', () => {

        clearInterval(intervalo)
        imagemAtual = Number(button.dataset.fundo)
        trocarImagem()
    }, 3400)
})
