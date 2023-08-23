"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const Discriminant = b**2-4*a*c;
 
  if (Discriminant === 0) {
const root = -b / (2 * a);
arr.push(root);
} else if (Discriminant > 0){
   const root1 = (-b + Math.sqrt(Discriminant)) / (2 * a);
   const root2 = (-b - Math.sqrt(Discriminant)) / (2 * a);
   arr.push(root1, root2); 
};
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   let result = [];
 if (typeof parseFloat(percent) == 'number' && typeof parseFloat(contribution) == 'number' && typeof parseFloat(amount) == 'number' && typeof parseFloat(countMonths) == 'number') {
 let percentMounth = percent /100 / 12;
 let credit = amount - contribution;
 let payment = credit * (percentMounth + (percentMounth / (((1 + percentMounth)**countMonths) - 1)));
let TotalPayment = payment * countMonths;
   result = Number(result) + Number(TotalPayment.toFixed(2));
 } else {
   result = 'false';
 };
 return result;
};