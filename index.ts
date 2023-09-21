import * as promptSync from 'prompt-sync';

// Define a interface para os detalhes do aluno
interface Aluno {
  nome: string;
  notas: number[];
  media: number;
}

// Função para calcular a média de um array de notas
function calcularMedia(notas: number[]): number {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return soma / notas.length;
}

// Função principal
function main() {
  const prompt = promptSync();
  
  const nome = prompt('Digite o nome do aluno: ');
  
  const notas: number[] = [];
  for (let i = 0; i < 4; i++) {
    const nota = parseFloat(prompt(`Digite a nota ${i + 1} (0 a 10): `));
    notas.push(nota);
  }
  
  const media = calcularMedia(notas);
  
  const aluno: Aluno = {
    nome: nome,
    notas: notas,
    media: media,
  };
  
  console.log('Detalhes do aluno:', aluno);
}

// Chama a função principal
main();