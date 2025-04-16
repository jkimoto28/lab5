document.getElementById('tip-form').addEventListener('input', function () {
  const billField = document.getElementById('bill');
  const tipSlider = document.getElementById('tip');
  const tipPercentField = document.getElementById('tipPercent');
  const tipAmountField = document.getElementById('tipAmount');
  const totalWithTaxField = document.getElementById('totalWithTax');
  const totalWithTipField = document.getElementById('totalWithTip');
  const totalWithTipTaxField = document.getElementById('totalWithTipTax');
  const errorField = document.getElementById('error');

  let bill = parseFloat(billField.value);
  const tipPercent = parseInt(tipSlider.value);

  if (isNaN(bill) || bill < 0) {
    errorField.textContent = 'Please enter a valid non-negative number for Bill Total.';
    tipPercentField.value = '';
    tipAmountField.value = '';
    totalWithTaxField.value = '';
    totalWithTipField.value = '';
    totalWithTipTaxField.value = '';
    return;
  } else {
    errorField.textContent = '';
  }

  if (bill === 0) {
    tipPercentField.value = '';
    tipAmountField.value = '';
    totalWithTaxField.value = '';
    totalWithTipField.value = '';
    totalWithTipTaxField.value = '';
    return;
  }

  const tipAmount = bill * (tipPercent / 100);
  const taxAmount = bill * 0.11;
  const totalWithTip = bill + tipAmount;
  const totalWithTax = bill + taxAmount;
  const totalWithTipTax = totalWithTip + taxAmount;

  tipPercentField.value = tipPercent + '%';
  tipAmountField.value = tipAmount.toFixed(2);
  totalWithTaxField.value = totalWithTax.toFixed(2);
  totalWithTipField.value = totalWithTip.toFixed(2);
  totalWithTipTaxField.value = totalWithTipTax.toFixed(2);
});
