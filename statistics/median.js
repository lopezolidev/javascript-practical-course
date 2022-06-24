function calculateAverage(list) {
    const sum = list.reduce(
        function (accumulatedValue = 0, newValue) {
            return accumulatedValue + newValue;
        }
    )

    const average = sum / list.length;
    return average;
}

const list = [
    100,
    200,
    600,
    400000000
]

const halfList = parseInt((list.length / 2));

function isEven (number) {
    if (number % 2 === 0) {
        return true 
    } else {
        return false
    }
}

if (isEven(list.length)) {
    const value1 = list[halfList -1 ];
    const value2 = list[halfList];
    calculateAverage([value1, value2])
} else {
    console.log(list[halfList]);
}  

// challenge:   1° transform this into a function
//              2° make the parameters any list
//              3° sort the list in the correct form