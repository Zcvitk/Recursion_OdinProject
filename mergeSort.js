function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    
    const mid = Math.floor(arr.length/2);
    const leftSide = arr.slice(0, mid);
    const rightSide = arr.slice(mid);

    const sortL = mergeSort(leftSide);
    const sortR = mergeSort(rightSide);
    
    return mergeArr(sortL, sortR)
}

function mergeArr (arrL, arrR) {
    const arrSorted = [];
    
    let L = 0;
    let R = 0;
    
    while (L < arrL.length && R < arrR.length) {
        if (arrL[L] < arrR[R]) {
            arrSorted.push(arrL[L]);
            L++;
        } else {
            arrSorted.push(arrR[R]);
            R++
        }
    }
        return arrSorted.concat(arrL.slice(L)).concat(arrR.slice(R));
}

let firstArr = [3, 2, 1, 13, 8, 5, 0, 1];          
let secondArr = [105, 79, 100, 110];

let firstArrSorted = mergeSort(firstArr);
let secondArrSorted = mergeSort(secondArr);

console.log(firstArrSorted);                    // https://www.programiz.com/javascript/online-compiler/
console.log(secondArrSorted);

/* output: [
  0, 1, 1,  2,
  3, 5, 8, 13
]*/

/* output: [ 79, 100, 105, 110 ]*/