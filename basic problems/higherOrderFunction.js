const radius = [3, 1, 2, 4];

const calculateArea = function (radius){
  const output = [];
  for(let i=0; i<radius.length; i++){
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
}

console.log(calculateArea(radius));

const calculateCircumference = function(radius){
  const output = [];
  for(let i=0; i<radius.length; i++){
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
}

console.log(calculateCircumference(radius));

const calculateDiameter = function(radius){
  const output = [];
  for(let i=0; i<radius.length; i++){
    output.push(2 * radius[i]);
  }
  return output;
}

console.log(calculateDiameter(radius));

//the code above involves code repetition, so we apply DRY principle(Dont Repeat Yourself) to avoid code repetition
//so, to avoid duplicating similar code for areas, circumferences, and diameters by using calculate
// 1.Higher-order Function:

// calculate is a higher-order function because it accepts another function (logic) as an argument.

// 2.Reusability:

// You avoid duplicating similar code for areas, circumferences, and diameters by using calculate.

// 3.Modularity:

// Each operation (area, circumference, diameter) is encapsulated in its own function, making the code clean and extensible.

const area = function(radius){
  return Math.PI * radius * radius;
}

const circumference = function(radius){
  return 2 * Math.PI * radius;
}

const diameter = function(radius){
  return 2 * radius;
}

const calculate = function (radius, logic){
  const output = [];
  for(let i=0; i<radius.length; i++){
    output.push(logic(radius[i]));
  }
  return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));