const exchangeRates = {
  USD: { VND: 23000, EUR: 0.85, USD: 1 },
  VND: { USD: 0.000043, EUR: 0.000037, VND: 1 },
  EUR: { USD: 1.18, VND: 27000, EUR: 1 }
};

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  if (isNaN(amount) || amount <= 0) {
      alert("Vui lòng nhập số tiền hợp lệ.");
      return;
  }

  const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
  document.getElementById("result").innerText = `${convertedAmount.toFixed(2)} ${toCurrency}`;
}