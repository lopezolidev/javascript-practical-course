function calculateAverage(list) {
    const sum = list.reduce(
        function (accumulatedValue = 0, newValue) {
            return accumulatedValue + newValue;
        }
    )

    const average = sum / list.length;
    console.log(average);
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

function calculateMedian(anyArray) {
    const halfArray = parseInt((anyArray.length / 2));

    if (anyArray.length % 2 === 0) {
        const value1 = anyArray[halfArray - 1 ];
        const value2 = anyArray[halfArray];
        calculateAverage([value1, value2])
    } else {
        console.log(anyArray[halfArray]);
    }  
    
}

console.log(anyArray);

//              2° make the parameters any list


//              3° sort the list in the correct form

const anyArray = [2, 34, 5, 24, 31, 23, 18, 49, 60, 9, 38, 6];

function calculateAverage(list) {
    const sum = list.reduce(
        function (accumulatedValue = 0, newValue) {
            return accumulatedValue + newValue;
        }
    )

    const average = sum / list.length;
    console.log(average);
}

const orderedArray = anyArray.sort( function(a, b) {
    return a - b;
});

function calculateMedian(orderedArray) {

    const halfArray = parseInt((orderedArray.length / 2));

    if (orderedArray.length % 2 === 0) {
        const value1 = orderedArray[halfArray - 1 ];
        const value2 = orderedArray[halfArray];
        calculateAverage([value1, value2])
    } else {
        console.log(orderedArray[halfArray]);
    }  
    
}

calculateMedian(orderedArray);