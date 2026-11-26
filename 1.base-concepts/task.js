"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  const Discriminant = b**2 - 4 * a * c;

  if (Discriminant === 0) {
    const root = -b / (2 * a);
    arr.push(root);
  } else if (Discriminant > 0) {
    const root1 = (-b + Math.sqrt(Discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(Discriminant)) / (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // fix: typeof parseFloat() always returns 'number' (even for NaN), use isNaN check instead
  // fix: result initialized as 0 (not []), returns false (boolean) on invalid input
  let result = 0;

  if (
    !isNaN(parseFloat(percent)) &&
    !isNaN(parseFloat(contribution)) &&
    !isNaN(parseFloat(amount)) &&
    !isNaN(parseFloat(countMonths))
  ) {
    let percentMounth = percent / 100 / 12;
    let credit = amount - contribution;
    let payment = credit * (percentMounth + (percentMounth / (((1 + percentMounth) ** countMonths) - 1)));
    let TotalPayment = payment * countMonths;
    result = Number(TotalPayment.toFixed(2));
  } else {
    result = false; // fix: boolean false, not string 'false'
  }

  return result;
}
