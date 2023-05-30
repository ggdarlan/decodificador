//trabalhando na função para selecionar o método a ser usado na criptografia e descriptografia de dados
/*function metodoSelect(){
	if (mSelect.selectedIndex = 0) {
		metodoSelect()
	}else if (mSelect.selectedIndex = 1) {
		metodoSelect()
	}else if (mSelect.selectedIndex = 2) {
		metodoSelect()
	}
}

function metodoSelect(){
    let select = document.querySelector('#mSelect').value;
    let optionValue = select.options['select.selectedIndex'];

    let value = otionValue.value;
    let text = ptionValue.text;

    console.log(value, text)
}

metodoSelect()
*/

//Usando "const" para criar variável que não pode ser reatribuída, mas pode ser modificada.
const mensagem = document.querySelector('.mensagem');
const decodifica = document.querySelector('.decodifica');

//função para bloquear letras maiúsculas, acento e caracteres especiais em geral
mensagem.addEventListener("keypress", function(semAcento) {
    if(!checkChar(semAcento)){
        semAcento.preventDefault();
    }
});

function checkChar(semAcento){

    const char = String.fromCharCode(semAcento.keyCode);
    
    const pattern = '[a-z 0-9]';

    if(char.match(pattern)){
        return true;
    }
}

//Chaves de criptografia:
//A letra "a" é convertid para "ai";
//A letra "e" é convertid para "enter";
//A letra "i" é convertid para "imes";
//A letra "o" é convertid para "ober";
//A letra "u" é convertid para "ufat".

//Função para encriptar
function criptografa(){
    const mensagemEcripitada = encriptar(mensagem.value);
    decodifica.value = mensagemEcripitada;
    mensagem.value = "";
}

function encriptar(textoEncriptado){
    //Usando "let" para criar varíavel local.
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

    //usando o laço "for"
    for (let i = 0; i < matrizCodigo.length; i++){
        if(textoEncriptado.includes(matrizCodigo[i][0]));
        textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }

    return textoEncriptado;
}

//Função para desencripitar
function descriptografa(){
    const mensagemDesencripitada = desencriptar(mensagem.value);
    decodifica.value = mensagemDesencripitada;
    mensagem.value = "";
}

function desencriptar(textoDesencriptado){
    //Usando "let" para criar varíavel local.
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    //usando o laço "for"
    for (let i = 0; i < matrizCodigo.length; i++){
        if(textoDesencriptado.includes(matrizCodigo[i][1]));
        textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }

    return textoDesencriptado;
}

//Função limpa tela
function limpaTela(){
    mensagem.value = "";
    decodifica.value = "";
    //document.getElementById(criptografia).value = "";
}

//Função copiar
function copiaTexto() {
    //usando o método getElementById para selecionar o elemento pelo ID
    let textoCopiado = document.getElementById("decodifica");
    textoCopiado.select();
    //método setSelectionRande é usado para determinar o início e o fim da seleção
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("O texto foi copiado!");
    }
/*
//Função para o método ASCII    
function criptografa(){
        
    var mensagem = document.getElementById('mensagem').value;

    var ascii = 0;
    
    x=0;
    
    while(mensagem[x]){
    
        ascii = mensagem[x].charCodeAt();
        
        ascii+=3;
        
        document.getElementById('decodifica').value += String.fromCharCode(ascii);
        
        x++;
    
    }

}

function descriptografa(){

    var mensagem = document.getElementById('mensagem').value;

    var ascii = 0;
    
    x=0;
    
    while(mensagem[x]){
    
        ascii = mensagem[x].charCodeAt();
        
        ascii-=3;
        
        document.getElementById('decodifica').value += String.fromCharCode(ascii);
        
        x++;
    
    }

}*/