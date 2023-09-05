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
   if (arr.length === 0) {
      return 0;
   };
   const summElements = arr.reduce((initialValue, elem) => initialValue + elem);
   return summElements;
}

function differenceMaxMinWorker(...arr) {
   if (arr.length === 0) {
      return 0;
    };
 return Math.max(...arr) - Math.min(...arr);
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
   return sumEvenElement - sumOddElement;
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
if (arr.length === 0)  {
   return 0;
 };
return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
   if (arrOfArr.length === 0) {
      return 0;
    }

   let maxResult = -Infinity;
   for (let i = 0; i < arrOfArr.length; i++) {
      const currentResult = func(...arrOfArr[i]);
      if (currentResult > maxResult) {
        maxResult = currentResult;
      };
    };
 return maxResult;
}
