const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");
botao.onclick = () => {
// 1. ler
const distancia = Number(document.querySelector("#distancia").value);
const consumo = Number(document.querySelector("#consumo").value);
const preco = Number(document.querySelector("#preco").value);
// 2. calcular
const litrosGastos = distancia / consumo;
const custoIda = litrosGastos * preco;
const custoTotal = (litrosGastos * 2) * preco;
// 3. mostrar
saida.textContent = "Custo da ida: R$ " + custoIda.toFixed(2) + "\nCusto total: R$ " + custoTotal.toFixed(2) + "\nLitros gastos na ida: " + litrosGastos.toFixed(1) + " litros";
}// quando o consumo é 0, aparece "infinity" no resultado.