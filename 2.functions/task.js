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
 let differenceWorker = maxWorker - minWorker;
 return differenceWorker;
    };
}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
