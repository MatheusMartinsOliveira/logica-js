const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");
botao.onclick = () => {
// 1. ler
const celsius = Number(document.querySelector("#celsius").value);
// 2. calcular
const fahrenheit = (celsius * 9/5) + 32;
// 3. mostrar
saida.textContent = "Fahrenheit: " + fahrenheit.toFixed(1) + "°F";
}