document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const taxAmountDisplay = document.getElementById("taxAmount");
  const totalAmountDisplay = document.getElementById("totalAmount");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const amountValue = document.getElementById("amount").value;
    const taxRateValue = document.getElementById("tax").value;

    // Parse the input values as numbers
    const amount = parseFloat(amountValue);
    const taxRate = parseFloat(taxRateValue);

    const taxAmount = (amount * taxRate) / 100;
    const totalAmount = amount + taxAmount;

    taxAmountDisplay.textContent = `Tax Amount: $${taxAmount.toFixed(2)}`;
    totalAmountDisplay.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
  });
});
