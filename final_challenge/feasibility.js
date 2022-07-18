// const valores = [];

// const investment = Number(prompt("insert initial investment"));
// const periodos = Number(prompt("insert period"));
// const tasa = Number(prompt("insert interest rate"));

// for (var i = 0; i < periodos; i++) {
//     const newValues = valores.push(Number(prompt("new value")));
//     console.log(valores);
// }

// const newValues = [];

// for (let j = 1; j < valores.length + 1; j++) {
//    newValues.push(valores[j -1] / Math.pow(1 + tasa, j));
//     console.log(newValues);
// }

// const total = newValues.reduce(function (initialV, finalV) {
//     return initialV + finalV;
// }, 0)

// const npv = total - investment;

// console.log(npv);

// now with a function



function netPresentValue () {
    const anyArray = [];
    const investment = document.getElementById("inputInvestment");
    const periods = document.getElementById("inputPeriod");
    const rate = document.getElementById("inputRate");

    for (var i = 0; i < periods.value; i++) {
        const newValues = anyArray.push(Number(prompt("new value")));
        console.log(anyArray);
    }

    const newValues = [];

    for (let j = 1; j < anyArray.length + 1; j++) {
        newValues.push(parseInt(anyArray[j-1] / Math.pow(1 + (rate.value / 100), j)));
        console.log(newValues);
    }

    const total = newValues.reduce( function (initialValue, finalValue) {
        return initialValue + finalValue;
    }, 0)

    const npv = parseInt(total - investment.value);

    if (npv > 0) {
        resultnpv.innerText = "The npv value is " + npv + ", with an investment of " + investment.value + ", an interest rate of " + rate.value + " and " + periods.value + " periods, is feasible";
    }
    else {
        resultnpv.innerText = "The npv value is " + npv + ", the investment wasn't feasible.";
    }
}

function irr() {
    const anyArray = [];
    const investment = Number(prompt("insert investment"));
    const periods = Number(prompt("insert periods"));
    console.log(periods);

    for (var i = 0; i < periods; i++) {
        const newValues = anyArray.push(Number(prompt("new value")));
        console.log(anyArray);
    }
    // const investment = document.getElementById("inputInvestment");
    // const periods = document.getElementById("inputPeriod");


    let j = 1;
    let rate = 0.1;
    let npv = 0;
    do {
        npv = parseInt(anyArray[j-1] / Math.pow(1 + rate, j));
        rate += 0.1;
        j += 1;
        console.log(npv);
    }
    while (npv < investment.value) 
    
}

// Sergio's algorithm:

const IRRvalues = [];
const financed = 200;
const rental = 50;
const period = 6;

IRRvalues.push(-financed);

for (var i = 0; i < period; i++) {
    IRRvalues.push(rental);
}
console.log(IRRvalues);
function IRRCalc (valueA, guest) {
    let inc = 0.00001;
    do {
        guest += inc;
        var NPV = 0;
        for (var j = 0; j < IRRvalues.length; j++) {
            NPV += IRRvalues[j] / Math.pow(1 + guest, j);
        }
    } while (NPV > 0)
    return guest * 100;
}
const IRR = IRRCalc(IRRvalues, 0.001);
console.log(IRR);

IRRCalc(financed, IRRvalues);

// Inspired by @dciso and @Zohaib in Stack Overflow
