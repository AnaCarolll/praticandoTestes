function contagemDeLetras(palavra){
    let palavraSemEspacos = palavra.replace(/\s+/g, ''); // Remove os espaços
    let contagem = 0;

    for (let i = 0; i < palavraSemEspacos.length; i++) {
        contagem++;
    }

    return contagem;
}

console.log(contagemDeLetras("Abacaxi"))

module.exports = contagemDeLetras;