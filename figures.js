// Square code
console.group("Square");
const squareSide = 5;

console.log("The square side is: " + squareSide + "cm");
 
const squarePerimeter = squareSide * 4;
console.log("The square perimeter is: " + squarePerimeter + "cm");

const squareArea = squareSide ** 2;
console.log("The square area is: " + squareArea + "cm²");
 
console.groupEnd();

// Triangle code
console.group("Triangle");

const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;


console.log("The triangle sides are: " + triangleSide1 + "cm, "  + triangleSide2 + "cm, "  + triangleBase + "cm")
console.log("The triangle height is: " + triangleHeight + "cm");

const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
console.log("The triangle perimeter: " + trianglePerimeter + "cm");

const triangleArea = (triangleBase * triangleHeight) / 2;
console.log("The triangle area is: " + triangleArea + "cm²");

console.groupEnd();

// Circle code
console.group("Circle");

const circleRadius = 4;
const PI = Math.PI;

console.log("The circle radius is: " + circleRadius + "cm");
console.log("Pi is: " + PI);

// Diameter
const circleDiameter = circleRadius * 2;
console.log("The circle diameter is: " + circleDiameter + "cm");

// Perimeter
const circlePerimeter = Math.round(circleDiameter * PI);
console.log("The circle perimeter is: " + circlePerimeter + "cm");

// Area
const circleArea = Math.round((circleRadius ** 2) * PI);
console.log("The circle area is: " + circleArea + "cm²") 


console.groupEnd();
