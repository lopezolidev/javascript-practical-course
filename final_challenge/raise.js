// const salary = 10; 
// //Number(document.getElementById("inputSalary"));
// const raise = 20; 
// //Number(document.getElementById("inputRaise"));
// console.log(salary + " " + raise);

function calculateRaise() {    
    const salary = document.getElementById("inputSalary");
    const raise = document.getElementById("inputRaise");

    const diff = raise.value - salary.value;
    const raiseSimple = diff / salary.value;
    const raisePercent = raiseSimple * 100;
    const resultSimple = document.getElementById("result-simple");
    resultSimple.innerText = "Your raise simple is " + raiseSimple + " times";

    const resultPercent = document.getElementById("result-percent");
    resultPercent.innerText = "Your raise percent is " + raisePercent + "%";
    }

