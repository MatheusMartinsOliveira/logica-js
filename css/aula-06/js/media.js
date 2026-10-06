console.log("ligou");
const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");
botao.onclick = () => {
// 1. ler
const n1 = Number(document.querySelector("#nota1").value);
const n2 = (document.querySelector("#nota2").value);
// 2. calcular
const media = (n1 + n2) / 2;
// 3. mostrar
saida.textContent = "Média: " + media.toFixed(1);
}
// removendo a média de 2 e 3 sem o nuber ficou em 11.5, a média fica desse jeito pois tudo que vem do campo de texto é uma string, então quando somamos duas strings, ele concatena elas, e não soma.