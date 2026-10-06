const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");
botao.onclick = () => {
// 1. ler
const preco = Number(document.querySelector("#preco").value);
const porcentagem = Number(document.querySelector("#porcentagem").value);
// 2. calcular
const desconto = (preco * porcentagem) / 100;
const valorFinal = preco - desconto;
// 3. mostrar
saida.textContent = "Valor final: R$ " + valorFinal.toFixed(2) + "\n Desconto aplicado: R$ " + desconto.toFixed(2);
}