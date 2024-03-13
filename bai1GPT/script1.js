const equationForm = document.getElementById('equationForm');
const aInput = document.getElementById('a');
const bInput = document.getElementById('b');
const resultDiv = document.getElementById('result');

equationForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const a = parseFloat(aInput.value);
  const b = parseFloat(bInput.value);

  if (isNaN(a) || isNaN(b)) {
    resultDiv.textContent = 'Vui lòng nhập các giá trị hợp lệ.';
    return;
  }

  const discriminant = b * b - 4 * a * 1;
  let solution;

  if (discriminant > 0) {
    solution = `Nghiệm x1 = ${(-b + Math.sqrt(discriminant)) / (2 * a)}, x2 = ${(-b - Math.sqrt(discriminant)) / (2 * a)}`;
  } else if (discriminant === 0) {
    solution = `Nghiệm kép: x = ${-b / (2 * a)}`;
  } else {
    solution = `Nghiệm phức: x1 = ${(-b + Math.sqrt(-discriminant) * 1j) / (2 * a)}, x2 = ${(-b - Math.sqrt(-discriminant) * 1j) / (2 * a)}`;
  }

  resultDiv.textContent = solution;
});
