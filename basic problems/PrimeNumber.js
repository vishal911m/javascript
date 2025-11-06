// chatGPT code
function isPrime(num) {
  // 0, 1, and negative numbers are not prime
  if (num <= 1) return false;

  // 2 and 3 are prime numbers
  if (num <= 3) return true;

  // eliminate multiples of 2 and 3
  if (num % 2 === 0 || num % 3 === 0) return false;

  // check divisibility from 5 to √num
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

// Example usage
// console.log(isPrime(2));   // true
// console.log(isPrime(11));  // true
// console.log(isPrime(15));  // false

// ################################################################################################################################333

// method2 (easy method)
function isPrime1(n){
  if (n<2)
    return `${n} is not a prime`;

  for(i=2; i<n; i++){
    if(n%i ===0){
      return `${n} is not a prime number`;
    }
  }

  return `${n} is a prime number`;
}

console.log(isPrime1(8));

// ###############################################################################################################################
// function to list prime numbers upto the given number

function isPrime2(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function listPrimes(limit) {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

// Example usage:
// console.log(listPrimes(50)); 
// Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
