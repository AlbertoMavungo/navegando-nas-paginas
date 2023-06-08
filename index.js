const imagens = document.querySelectorAll(".slide");
const setaEsquerdo = document.getElementById("seta-esquerdo")
const setaDireito = document.getElementById("seta-direito")

let imagemAtual = 0;

setaDireito.addEventListener("click", () => {
    if(imagemAtual === imagens.length - 1 ) {
        return;
    }
    imagemAtual ++;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

setaEsquerdo.addEventListener('click', function(){
    if (imagemAtual === 0){
        return
    }
    imagemAtual --;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

function mostrarImagem() {
    imagens[imagemAtual].classList.add('mostrar');
}

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove('mostrar');
}

function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtual !==0;
    if (naoEhAPrimeiraImagem){
        setaEsquerdo.classList.remove('opacidade');
    }else{
        setaEsquerdo.classList.add('opacidade');
    }

    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
    if (chegouNaUltimaImagem){
        setaDireito.classList.add("opacidade");
    }else{
        setaDireito.classList.remove("opacidade")
    }
}