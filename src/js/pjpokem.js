function mudarTema(){

 let alterarTema =  document.querySelector('#botao-alterar-tema');
 let imagemTrocaModo= document.querySelector('.imagem-botao')
 let modo = document.querySelector('body')

 modo.classList.toggle('modo-escuro')
    
 if(modo.classList.contains('modo-escuro')){
    imagemTrocaModo.setAttribute('src', "./src/imagens/moon.png")
}else{
    imagemTrocaModo.setAttribute('src', "./src/imagens/sun.png")
}

}



