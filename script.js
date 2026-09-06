// Cotações fixas em reais — definidas manualmente para este exercício
const USD = 5.25;
const EUR = 5.50;
const GBP = 6.20;

// Obtendo os elementos do formulário
const form = document.querySelector('form');
const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const resultFooter = document.querySelector('main footer');
const rateText = document.getElementById('description');
const resultText = document.getElementById('result');

// Manipulando o input para aceitar somente números
amountInput.addEventListener('input', () => {
  const nonDigits = /\D+/g;
  amountInput.value = amountInput.value.replace(nonDigits, '');
});

// Ao enviar o formulário, escolhe a cotação da moeda selecionada
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currencySelect.value) {
    case 'USD':
      convertCurrency(amountInput.value, USD, '$');
      break;
    case 'EUR':
      convertCurrency(amountInput.value, EUR, '€');
      break;
    case 'GBP':
      convertCurrency(amountInput.value, GBP, '£');
      break;
  }
}

// Converte o valor digitado para reais e exibe o resultado
function convertCurrency(amount, rate, symbol) {
  // Mostra a cotação usada, ex.: "$ 1 = 5,25"
  rateText.textContent = `${symbol} 1 = ${rate.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;

  // Calcula o total
  const total = amount * rate;

  // Formata no padrão brasileiro e exibe
  resultText.textContent = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  // Aplica a classe que revela o footer com o resultado
  resultFooter.classList.add('show-result');
}
