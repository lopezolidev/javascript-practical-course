const valores = [];

const investment = Number(prompt("insert initial investment"));
const periodos = Number(prompt("insert period"));
const tasa = Number(prompt("insert interest rate"));

for (var i = 0; i < periodos; i++) {
    const newValues = valores.push(Number(prompt("new value")));
    console.log(valores);
}

const newValues = [];

for (let j = 1; j < valores.length + 1; j++) {
   newValues.push(valores[j -1] / Math.pow(1 + tasa, j));
    console.log(newValues);
}

const total = newValues.reduce(function (initialV, finalV) {
    return initialV + finalV;
}, 0)

const npv = total - investment;

console.log(npv);

// now with a function

const anyArray = [];

function netPresentValue (values) {
    const investment = Number(document.getElementById("inputInvestment"));
    const periods = Number(document.getElementById("inputPeriod"));
    const rate = Number(document.getElementById("inputRate"));

    for (var i = 0; i < periods; i++) {
        const newValues = values.push(Number(prompt("new value")));
        console.log(values);
    }

    const newValues = [];

    for (let j = 1; j < values.length + 1; j++) {
        newValues.push(parseInt(values[j-1] / Math.pow(1 + rate, j)));
        console.log(newValues);
    }

    const total = newValues.reduce( function (initialValue, finalValue) {
        return initialValue + finalValue;
    }, 0)

    const npv = parseInt(total - investment);

    console.log(npv);

    if (npv > 0) {
        console.log("The npv value is" + npv + ", with an investment of " + investment + ", an interest rate of " + rate + " and " + periods + " periods, is feasible")
    }
    else {
        console.log("The npv value is " + npv + ", the investment wasn't feasible.")
    }
}

netPresentValue(anyArray);