var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);

// console.log("square of n is: ", square2);
// console.log("square of 4 is: ", square4);

// let arr = [1,2,3,4,5,6,7,8,9,10]

let arr = [1,5,9];

const sum = arr.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue
}, 0);

console.log(sum);