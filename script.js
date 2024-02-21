const palavras_do_genero_alimenticio_4 = ["comida","maca","jaca","pera","peru","cafe","bolo","bala","alho","tofu","coco"];

const palavras_do_genero_alimenticio_5 = ["comida","limao","caqui","carne","milho","caldo","mamao","cacau","manga","pizza","cural"];

let tipo;
let letra;
let palavra;
let resposta;
let sorteio;
let palpite;

function Gerar4(){
    sorteio = parseInt(Math.random()*10);
    tipo = palavras_do_genero_alimenticio_4[0];
    palavra = palavras_do_genero_alimenticio_4[sorteio+1];
    letra = palavra.charAt(0);
    document.querySelector('#tipo').innerHTML = tipo.toUpperCase();
    document.querySelector('#tamanho').innerHTML = palavra.length;
    document.querySelector('#letra').innerHTML = letra.toUpperCase();
}

function Gerar5(){
    sorteio = parseInt(Math.random()*10);
    tipo = palavras_do_genero_alimenticio_5[0];
    palavra = palavras_do_genero_alimenticio_5[sorteio+1];
    letra = palavra.charAt(0);
    document.querySelector('#tipo').innerHTML = tipo.toUpperCase();
    document.querySelector('#tamanho').innerHTML = palavra.length;
    document.querySelector('#letra').innerHTML = letra.toUpperCase();
}

function Confirmar(){
    palpite = (document.querySelector('#palpite').value).toLowerCase();
    if (palpite==palavra) {
        resposta = (document.querySelector('#resultado').innerHTML = "Você acertou!");
        document.querySelector('#palavras_sorteadas').innerHTML = palavra.toUpperCase();
    }
    else {
        resposta = (document.querySelector('#resultado').innerHTML = "Você errou!");
        document.querySelector('#palavras_sorteadas').innerHTML = palavra.toUpperCase();
    }
}