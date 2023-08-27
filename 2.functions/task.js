function getArrayParams(...arr) {
   let min, max, sum, avg;
   sum = 0;
   min = arr[0];
   max = arr[0];
 
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] >= max) {
           max = arr[i]
       } 
       else if (arr[i] < min) {
           min = arr[i]
       } 
           sum  += arr[i];   
   };
       avg = (sum / arr.length).toFixed(2);
       avg = Number(avg);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
   let summElements = arr.reduce(function(initialValue, elem) {
      return initialValue + elem;
   }, 0);
   return summElements;
}

function differenceMaxMinWorker(...arr) {
   if (arr.length === 0)  {
      return 0;
    } else {
let maxWorker = Math.max(...arr);
 let minWorker = Math.min(...arr);
 let differenceMMWorker = maxWorker - minWorker;
 return differenceMMWorker;
    };
}

function differenceEvenOddWorker(...arr) {
   let sumEvenElement = 0; // for even numbers
   let sumOddElement = 0; //for odd numbers
   
   if (arr.length === 0) {
      return 0;
   } 
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }; 
   }
   let differenceEOWorker = sumEvenElement - sumOddElement;
   return differenceEOWorker;
}

function averageEvenElementsWorker(...arr) {
let sumEvenElement = 0;
let countEvenElement = 0;
for (let i = 0; i < arr.length; i++) {
   if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
   };
};
let averageEEWorker = sumEvenElement / countEvenElement;
if (arr.length === 0)  {
   return 0;
 } else {
return averageEEWorker;
 };
}

function makeWork (arrOfArr, func) {

}
