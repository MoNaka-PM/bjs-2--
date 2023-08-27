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

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
