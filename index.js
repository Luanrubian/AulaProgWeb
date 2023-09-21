"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
// Função para calcular a média de um array de notas
function calcularMedia(notas) {
    var soma = notas.reduce(function (acc, nota) { return acc + nota; }, 0);
    return soma / notas.length;
}
// Função principal
function main() {
    var prompt = promptSync();
    var nome = prompt('Digite o nome do aluno: ');
    var notas = [];
    for (var i = 0; i < 4; i++) {
        var nota = parseFloat(prompt("Digite a nota ".concat(i + 1, " (0 a 10): ")));
        notas.push(nota);
    }
    var media = calcularMedia(notas);
    var aluno = {
        nome: nome,
        notas: notas,
        media: media,
    };
    console.log('Detalhes do aluno:', aluno);
}
// Chama a função principal
main();
