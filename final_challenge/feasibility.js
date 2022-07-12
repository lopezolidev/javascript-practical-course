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

