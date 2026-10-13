const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");
botao.onclick = () => {
  // 1. ler
  const valorCompra = Number(document.querySelector("#numero1").value);
  const regiao = document.querySelector("#regiao").value;
  // 2. calcular
  let frete;
  switch (regiao) {
    case "1":
      frete = 15;
      break;
    case "2":
      frete = 20;
      break;
    case "3":
      frete = 25;
      break;
    case "4":
      frete = 30;
      break;
    case "5":
      frete = 35;
      break;
    default:
      frete = 0;
  }
  (valorCompra >= 200 && regiao === "1" || regiao === "2") ? frete = 0 : frete;
  // 3. mostrar
  if(regiao === "") {
    saida.textContent = "Selecione uma região.";
    saida.className = "erro";
  } else {
    saida.textContent = "Valor total: R$ " + (frete + valorCompra).toFixed(2);
    saida.className = "ok";
  }
};
