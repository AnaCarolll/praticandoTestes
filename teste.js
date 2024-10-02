const dados = require('./contagemDeLetras')
const test = require("node:test");
const assert = require('node:assert');


    test('deve contar corretamente o número de letras mesmo que haja espaço',()=>{
        const palavra = 'doce amargo';
        const resultado = dados(palavra);
        assert.strictEqual(resultado, 10);
    })
