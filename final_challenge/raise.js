// const salary = 10; 
// //Number(document.getElementById("inputSalary"));
// const raise = 20; 
// //Number(document.getElementById("inputRaise"));
// console.log(salary + " " + raise);

function calculateRaise() {    
    const salary = document.getElementById("inputSalary");
    const multiplier = document.getElementById("inputMultiplier");
    const numericalSalary = parseInt(salary.value);
    const raiseSalary = salary.value*multiplier.value;
    const raiseTotal = raiseSalary + numericalSalary;
    const resultSimple = document.getElementById("result-simple");
    resultSimple.innerText = "Your raise is " + raiseTotal;

    // const resultPercent = document.getElementById("result-percent");
    // resultPercent.innerText = "Your raise percent is " + raisePercent + "%";
    }

