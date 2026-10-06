const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");
botao.onclick = () => {
// 1. ler
const total = Number(document.querySelector("#total").value);
// 2. calcular
const horas = Math.floor(total / 60);
const minutosRestantes = total % 60;
// 3. mostrar
saida.textContent = "Tempo: " + horas + " horas e " + minutosRestantes + " minutos";
}