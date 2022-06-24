const list1 = [
    100,
    200,
    300,
    500
];

let sumList1 = 0;
for (let i = 0; i < list1.length; i++) {
    sumList1 = sumList1 + list1[i];
}

const average = sumList1 / list1.length;

// Now with a function

function calculateAverage (list) {
    let sumList = 0;
    for (let i = 0; i < list.length; i++) {
        sumList = sumList + list[i];
    }
    
    const average = sumList / list.length;
    return average;
}

// Now with a method inside the function

function calculateAverage(list) {
    // let sumList = 0;
    // for (let i = 0; i < list.length; i++) {
    //     sumList = sumList + list[i];
    // }

    const sum = list.reduce(
        function (accumulatedValue = 0, newValue) {
            return accumulatedValue + newValue;
        }
    )

    const average = sum / list.length;
    return average;
}