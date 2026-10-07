const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");
const taxa_servico = 0.1;
botao.onclick = () => {
  // 1. ler
    const valor = Number(document.querySelector("#valor").value);
    const pessoas = Number(document.querySelector("#pessoas").value);
    // 2. calcular
    const valorComServico = valor + (valor * taxa_servico);
    const valorPorPessoa = valorComServico / pessoas;
    const servico = valor * taxa_servico;
    // 3. mostrar
        saida.textContent = "Valor por pessoa: R$ " + valorPorPessoa.toFixed(2) + "\nTaxa de serviço: R$ " + servico.toFixed(2) + "\nValor total: R$ " + valorComServico.toFixed(2);
}