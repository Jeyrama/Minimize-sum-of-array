/*
Given an array of integers, find the minimum sum 
which is obtained from summing each two integers' product.

Notes:
  Array/list will contain positives only.
  Array/list will always have even size.

Example:
minSum({5,4,2,3}) ==> return (22) 
*/


// Solution

function minSum(arr) {
  return arr.sort((a,b) => a-b)
            .slice(0, arr.length/2)
            .reduce((acc, curr, index) => acc += curr * arr[arr.length - index - 1], 0)
}

// or

function minSum(arr) {
  let res = 0;
  arr = arr.sort((a,b) => a-b);

  while(arr.length) {
    res += arr.pop()*arr.shift();
  }

  return res
}