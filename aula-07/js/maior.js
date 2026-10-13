const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");
botao.onclick = () => {
  // 1. ler
  const n1 = Number(document.querySelector("#numero1").value);
  const n2 = Number(document.querySelector("#numero2").value);
  // 2. calcular
  // 3. mostrar
  if (n1 > n2) {
    saida.textContent = "O primeiro número é maior.";
    saida.className = "ok";
  } else if (n2 > n1) {
    saida.textContent = "O segundo número é maior.";
    saida.className = "ok";
  } else {
    saida.textContent = "Os números são iguais.";
    saida.className = "erro";
  }
};
