const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");
botao.onclick = () => {
  // 1. ler
  const dia = document.querySelector("#dia").value;
  // 2. calcular
  let diaDaSemana;
  switch (dia) {
    case "1":
      diaDaSemana = "Domingo";
      saida.className = "aviso";
      break;
    case "2":
      diaDaSemana = "Segunda-feira";
      saida.className = "ok";
      break;
    case "3":
      diaDaSemana = "Terça-feira";
      saida.className = "ok";
      break;
    case "4":
      diaDaSemana = "Quarta-feira";
      saida.className = "ok";
      break;
    case "5":
      diaDaSemana = "Quinta-feira";
      saida.className = "ok";
      break;
    case "6":
        diaDaSemana = "Sexta-feira";
        saida.className = "aviso";
        break;
    default:
      diaDaSemana = "Dia inválido";
      saida.className = "erro";
  }
  // 3. mostrar
    saida.textContent = "Dia da semana: " + diaDaSemana;
    saida.className = "ok";
};
