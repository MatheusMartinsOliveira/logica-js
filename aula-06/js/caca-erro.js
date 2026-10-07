const botao = document.querySelector("#calcular") //estava escrito "calcula" ao invés de "calcular", portanto não acharia o botão e não funcionaria o código
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const n1 = document.querySelector("#nota1").value
  const n2 = document.querySelector("#nota2").value
  const n3 = document.querySelector("#nota3").value // Estava sem o Number, portanto não somaria os números, mas sim concatenaria as strings, resultando em um valor errado. Ex: 10 + 10 + 10 = 101010, e não 30.
  const media = (Number(n1) + Number(n2) + Number(n3)) //Estava sem o parenteses portanto calcularia errado, sem a prioridade de soma das notas.
  saida.textContent = "Média: " + media.toFixed(2)
}
