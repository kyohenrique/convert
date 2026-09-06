/*
 * ARQUIVO INATIVO — não é carregado pelo index.html.
 *
 * Guarda trechos da primeira versão deste projeto, escritos durante o curso.
 * Estão aqui como registro do que foi praticado, não como código em uso.
 * As variáveis que aparecem abaixo são definidas no script.js.
 */

// ---------------------------------------------------------------------------
// Conversão com try/catch e validação com isNaN
//
// Substituída na organização do projeto. Motivo: a máscara do input já remove
// tudo que não é dígito antes do valor chegar aqui, então o isNaN nunca era
// verdadeiro e o catch nunca era alcançado. A proteção existia, mas não tinha
// como ser acionada.
// ---------------------------------------------------------------------------

function convertCurrency(amount, rate, symbol) {
  try {
    rateText.textContent = `${symbol} 1 = ${rate}`;

    // Calcula total
    let total = amount * rate;

    // Verifica se o total é um número válido; se não for, interrompe e avisa
    if (isNaN(total)) {
      return alert('Valor inválido. Por favor, insira um número válido.');
    }

    // Exibe resultado total e formata o valor
    resultText.textContent = total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    // Aplica a classe que exibe o footer para mostrar o resultado
    resultFooter.classList.add('show-result');
  } catch (error) {
    // Remove a classe que exibe o footer para esconder o resultado
    resultFooter.classList.remove('show-result');
    console.log(error);
    alert('Ocorreu um erro ao converter a moeda. Por favor, tente novamente.');
  }
}

// ---------------------------------------------------------------------------
// Máscara do input escrita passo a passo, uma variável por etapa
//
// Faz exatamente o mesmo que a versão de uma linha usada hoje no script.js.
// Fica como registro de como o raciocínio foi montado antes de ser encurtado.
// ---------------------------------------------------------------------------

amountInput.addEventListener('input', () => {
  const value = amountInput.value;
  const regex = /\D+/g;
  const numericValue = value.replace(regex, '');
  amountInput.value = numericValue;
});
