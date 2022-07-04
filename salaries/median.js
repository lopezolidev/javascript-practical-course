//  Helper functions
function calculateAverage(list) {

    const sum = list.reduce(
        function (accumulatedValue = 0, newValue) {
            return accumulatedValue + newValue;
        }
    )

    const average = sum / list.length;
    return average;
}

const salariesCol = colombia.map(function (element) {
    return element.salary;
});

const salariesColSorted = salariesCol.sort( function (salaryA, salaryB) {
    return salaryA - salaryB;
});

function isEven(number) {
    return (number % 2 === 0);
}

function calculateSalaryMedian (salaryList) {
    const half = parseInt(salaryList.length / 2);

    if (isEven(salaryList)) {
        const personMiddle1 = salaryList[half] - 1;
        const personMiddle2 = salaryList[half];
        const medianPerson = calculateAverage([personMiddle1, personMiddle2]);
    } else {
        const personMiddle = salaryList[half]
        return personMiddle; 
    }
}

const generalMedian = calculateSalaryMedian(salariesColSorted);

const spliceStart = (salariesColSorted.length * 90) / 100;
const spliceCount = salariesColSorted.length - spliceStart;

const top10Salaries = salariesColSorted.splice(spliceStart, spliceCount);
// el método splice genera 2 cosas: nos pide como parámetros desde dónde inicia en el array y de ahí en adelante cuantos elementos toma del array; y altera el array original, quitándole los elementos que le enviamos en cantidad como segundo parámetro. En cambio el método "slice" nos pide el punto de inicio y el punto final. En este caso; "splice" nos pide lugar de inicio y cuántos elementos tomará del array; "slice" tomará el punto inicial y el punto final.

const medianTop10Salaries = calculateSalaryMedian(top10Salaries);


console.log( {
    generalMedian,
    medianTop10Salaries
})