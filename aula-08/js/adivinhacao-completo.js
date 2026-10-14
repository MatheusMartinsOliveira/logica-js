const botao = document.querySelector("#adivinhar");
const saida = document.querySelector("#resultado");
const secreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let historico = "";

botao.onclick = () => {
  // 1. ler
  const chute = Number(document.querySelector("#palpite").value);
  tentativas++;
    if (tentativas === 7) {
      saida.textContent =
        "Você atingiu o número máximo de tentativas. O número secreto era " +
        secreto +
        ".";
      saida.className = "erro";
      botao.disabled = true;
    } else {
      if (chute === secreto) {
        saida.textContent =
          "Parabéns! Você acertou o número secreto " +
          secreto +
          " em " +
          tentativas +
          " tentativas.";
        saida.className = "ok";
        botao.disabled = true;
      } else if (chute < secreto) {
        saida.textContent =
          "O número secreto é maior que " +
          chute +
          ". Você tem " +
          (7 - tentativas) +
          " tentativas restantes!";
          historico += chute + " ";
        saida.className = "alerta";
      } else {
        saida.textContent =
          "O número secreto é menor que " +
          chute +
          ". Tente novamente!" +
          " Você tem " +
          (7 - tentativas) +
          " tentativas restantes!";
        saida.className = "alerta";
        historico += chute + " ";
      }
      saida.textContent += "\nSeus palpites: " + historico;
    }
  };
