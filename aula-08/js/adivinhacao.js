const botao = document.querySelector("#adivinhar");
const saida = document.querySelector("#resultado");
const secreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

botao.onclick = () => {
  // 1. ler
  const chute = Number(document.querySelector("#palpite").value);
  tentativas++;
  if (chute === secreto) {
    saida.textContent =
      "Parabéns! Você acertou o número secreto " +
      secreto +
      " em " +
      tentativas +
      " tentativas.";
      saida.className = "ok";
  } else if (chute < secreto) {
    saida.textContent =
      "O número secreto é maior que " + chute + ". Tente novamente!";
    saida.className = "alerta";
  } else {
    saida.textContent =
      "O número secreto é menor que " + chute + ". Tente novamente!";
    saida.className = "alerta";
  }
};
