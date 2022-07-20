//Net Present Value function

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

// Sergio's algorithm for Internal Rate of Return function:


function IRRCalc () {
    let guest = 0.001;
    const IRRvalues = [];
    const financed = document.getElementById("inputFinanced");
    const period = document.getElementById("inputCashFlows");

    const numericalFinanced = parseInt(financed.value);
    const numericalPeriod = parseInt(period.value);

    
    IRRvalues.push(-numericalFinanced);

    for (var i = 0; i < numericalPeriod; i++) {
      var rental = parseInt(prompt("Insert rental"));
      IRRvalues.push(rental);
      console.log(IRRvalues);
    }

    let inc = 0.00001;
    do {
        guest += inc;
        var NPV = 0;
        for (var j = 0; j < IRRvalues.length; j++) {
            NPV += IRRvalues[j] / Math.pow(1 + guest, j);
        }
    } while (NPV > 0)
    const newGuest = parseInt(guest * 100);
    const resultIRR = document.getElementById("resultirr");
    resultIRR.innerText = newGuest + "% is your IRR."
}

// Inspired by @dciso and @Zohaib in Stack Overflow


// Interes rate calculator

function InRaCalc() {
    const capitalInicial = document.getElementById("inputInitialCapital");
    const tasaInteres = document.getElementById("inputInteresRate");
    const añosInteres = document.getElementById("inputTime");
    const capitalResultado = document.getElementById("resultInRa");

    const capitalInicialNumerico = parseInt(capitalInicial.value);
    const tasaInteresNumerica = parseInt(tasaInteres.value);
    const añosInteresNumerico = parseInt(añosInteres.value);

    const capitalTotal = capitalInicialNumerico * Math.pow(1 + (tasaInteresNumerica/100), añosInteresNumerico);

    //here I add the function Math.round and Number.EPSILON operator to round the decimal digits of the capitalTotal number to 2 digits
    const capitalFinal = Math.round((capitalTotal + Number.EPSILON) * 100) / 100;

    capitalResultado.innerText = "Tendrás " + capitalFinal + "$ de capital a los " + añosInteresNumerico + " años, con una tasa de interés de " + tasaInteresNumerica + "% y " + capitalInicialNumerico + " de capital inicial."   
}

// Debt amortization by annualities

function AmorDebt() {
    const capitalPrestado = document.getElementById("inputLoanCapital");
    const tasaInteresAmr = document.getElementById("inputLoanRate");
    const anniosPagoAmr = document.getElementById("inputYearsLoan");
    const resultadoAmrDebt = document.getElementById("resultAmorDebt");

    const capitalPrestadoNmr = parseInt(capitalPrestado.value);
    const tasaInteresNmr = parseInt(tasaInteresAmr.value);
    const anniosPagoNmr = parseInt(anniosPagoAmr.value);

    const annualityNum = (capitalPrestadoNmr * (tasaInteresNmr/100) * Math.pow(1 + (tasaInteresNmr/100), anniosPagoNmr));


    const annualityDen =  Math.pow(1 + (tasaInteresNmr/100), anniosPagoNmr) - 1;

    const annuality = annualityNum / annualityDen;
    
    const annualityParsed = Math.round((annuality + Number.EPSILON) * 100) / 100;

    resultadoAmrDebt.innerText = "Debe pagar " + annualityParsed + "$ anualmente para amortizar su deuda"
}