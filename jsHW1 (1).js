function collatzSequence(n) {
  const sequence = [n];

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    sequence.push(n);
  }

  return sequence;
}

function lengthOfSequence(sequence){
  return sequence.length;
}

function factorial(n){
  if(n == 0)
    return 1;
  return n * factorial(n-1);
}

function sumDigits(n){
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

let longestLength = 0;
let numberWithLongestLength = 0;
for(let i = 1; i < 1000000; i++){
  let lengthofi = lengthOfSequence(collatzSequence(i));
  if(lengthofi > longestLength){
    longestLength = lengthofi;
    numberWithLongestLength = i;
  }
}
console.log(`Problem 14: ${numberWithLongestLength} has the longest sequence (length ${longestLength})\n`);

let factorial100 = factorial(100);
let sumOfItsDigits = sumDigits(factorial100);
console.log(`Problem 20: 100! = ${factorial100}, and the sum of its digits = ${sumOfItsDigits}`);