const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");
botao.onclick = () => {
  // 1. ler
  const n1 = Number(document.querySelector("#nota1").value);
  const n2 = Number(document.querySelector("#nota2").value);
  // 2. calcular
  const media = (n1 + n2) / 2;
  // 3. mostrar
  if (media >= 7) {
    saida.textContent = "Aprovado com média " + media.toFixed(1);
    saida.className = "ok";
  } else {
    saida.textContent = "Reprovado com média " + media.toFixed(1);
    saida.className = "erro";
  }
};
