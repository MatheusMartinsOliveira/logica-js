const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");
botao.onclick = () => {
  // 1. ler
  const peso = Number(document.querySelector("#peso").value);
  const altura = Number(document.querySelector("#altura").value);
  if (peso === 0 || altura === 0) {
    saida.textContent = "Preencha todos os campos.";
    saida.className = "erro";
  } else if (peso < 0 || altura < 0) {
    saida.textContent = "Peso e altura devem ser valores positivos.";
    saida.className = "erro";
  } else {
    // 2. calcular
    const imc = peso / (altura * altura);
  }

  // 3. mostrar
  if (imc < 18.5) {
    saida.textContent = "IMC de " + imc.toFixed(1) + ": Abaixo do peso.";
    saida.className = "alerta";
  } else if (imc < 25) {
    saida.textContent = "IMC de " + imc.toFixed(1) + ": Peso normal.";
    saida.className = "ok";
  } else if (imc < 30) {
    saida.textContent = "IMC de " + imc.toFixed(1) + ": Sobrepeso.";
    saida.className = "alerta";
  } else {
    saida.textContent = "IMC de " + imc.toFixed(1) + ": Obesidade.";
    saida.className = "erro";
  }
  //Quando deixa os campos em branco, ele pega a condição do else.
};
