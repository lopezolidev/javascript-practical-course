// Square code
// console.group("Square");
// const squareSide = 5;

// console.log("The square side is: " + squareSide + "cm");
 

function squarePerimeter (side) {
    return side * 4;
}
function squareArea (side) {
    return side ** 2;
}

// console.log("The square area is: " + squareArea + "cm²");
 
console.groupEnd();

// Triangle code
console.group("Triangle");

// const triangleSide1 = 6;
// const triangleSide2 = 6;
// const triangleBase = 4;
// const triangleHeight = 5.5;

// console.log("The triangle sides are: " + triangleSide1 + "cm, "  + triangleSide2 + "cm, "  + triangleBase + "cm")
// console.log("The triangle height is: " + triangleHeight + "cm");

function trianglePerimeter (side1, side2, base) {
    return side1 + side2 + base;
}


// console.log("The triangle perimeter: " + trianglePerimeter + "cm");

function triangleArea (base, height) {
    return (base * height) / 2;
}

// const triangleArea = (triangleBase * triangleHeight) / 2;
// console.log("The triangle area is: " + triangleArea + "cm²");

console.groupEnd();

// Circle code
console.group("Circle");

// const circleRadius = 4;
// const PI = Math.PI;

// console.log("The circle radius is: " + circleRadius + "cm");
// console.log("Pi is: " + PI);

// Diameter
function circleDiameter (radius) {
    return radius * 2;
}
// const circleDiameter = circleRadius * 2;
// console.log("The circle diameter is: " + circleDiameter + "cm");

// Perimeter
function circlePerimeter (radius) {
    var diameter = circleDiameter(radius);
    return diameter * Math.PI;
 }
// const circlePerimeter = Math.round(circleDiameter * PI);
// console.log("The circle perimeter is: " + circlePerimeter + "cm");

// Area
function circleArea (radius) {
    return (radius ** 2) * Math.PI;
}
// const circleArea = Math.round((circleRadius ** 2) * PI);
// console.log("The circle area is: " + circleArea + "cm²") 


console.groupEnd();

// Here the calculations integrated with the HTML

// Square

function calculateSquarePerimeter() {
    const side = document.getElementById("inputSquare");
    const perimeter =squarePerimeter(side.value);
    // const perimeter = squarePerimeter(value);
    // alert(perimeter);
    alert(perimeter);
}
function calculateSquareArea() {
    const side = document.getElementById("inputSquare");
    const area =squareArea(side.value);
    alert(area);
}

// Triangle
function calculateTrianglePerimeter() {
    const side1 = document.getElementById("inputTriangle");
    const side2 = document.getElementById("inputTriangle2");
    const base = document.getElementById("inputTriangle3");
    const height = document.getElementById("inputTriangle4");
    
    const perimeter = trianglePerimeter(Number(side1.value), Number(side2.value), Number(base.value));
    alert (perimeter);
    const area = triangleArea(Number(base.value), Number(height.value));
    alert (area);
}

// Circle 
function calculateCirclePerimeter() {
    const radius = document.getElementById("inputCircle");
    const perimeter = circlePerimeter(Number(radius.value));
    alert(perimeter);
}
function calculateCircleArea() {
    const radius = document.getElementById("inputCircle");
    const area = circleArea(Number(radius.value));
    alert(area);
}