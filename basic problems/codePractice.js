var x = 1;
a();
b();
// console.log(x);
function a(){
  var x = 10 ;
  // console.log(x)
}

function b(){
  var x = 100;
  // console.log(x);
}

for (let i=0; i<10; i++){
  setTimeout(() => {
    // console.log(i)
  }, 100);
}

var arr = [1,2,3];

var output = arr.reduce((acc, curr) => (
  acc+curr
), 0);

// console.log(output);

for(let j=0; j<10; j++){
  setTimeout(()=>{console.log(j)},1000)
}