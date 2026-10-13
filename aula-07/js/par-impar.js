const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");
botao.onclick = () => {
  // 1. ler
  const numero = Number(document.querySelector("#numero").value);
  // 2. calcular
  const ehPar = numero % 2 === 0;
  // 3. mostrar
  if (ehPar) {
    saida.textContent = "O número " + numero + " é par.";
    saida.className = "ok";
  } else {
    saida.textContent = "O número " + numero + " é ímpar.";
    saida.className = "erro";
  }
};

