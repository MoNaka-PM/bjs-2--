"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const Discriminant = b**2-4*a*c;
 //no roots
  if (Discriminant < 0) {
   return arr;
  } else if (Discriminant === 0) {
const root = -b / (2 * a);
arr.push(root);
} else {
   const root1 = (-b + Math.sqrt(Discriminant)) / (2 * a);
   const root2 = (-b - Math.sqrt(Discriminant)) / (2 * a);
   arr.push(root1, root2); 
};
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   percent = +percent;
   contribution = +contribution;
   amount = +amount;
   countMonths = +countMonths;
 if (typeof percent !== 'number'|| typeof contribution !== 'number'|| typeof amount !== 'number'|| typeof countMonths !== 'number') {
   console.log ('false')
} else {  
 let percentMounth = percent /100 / 12;
 let credit = amount - contribution;
 let payment = credit * (percentMounth + (percentMounth / (((1 + percentMounth)**countMonths) - 1)));
   let TotalPayment = payment * countMonths;
   console.log (Number(TotalPayment.toFixed(2)));
 };
}