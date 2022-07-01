// teachers method to calculate the mode

const list = [
    1,
    1,
    2,
    3,
    4,
    2,
    2,
    1,
    3,
    4,
    2,
    2,
    2,
    1,
];

const listObject = {};

list.map(
    function (element) {
        if (listObject[element]) {
            listObject[element] += 1;
        }
        else { 
            listObject[element] = 1;
        }
    }
);

const listArray = Object.entries(listObject).sort(
    function (elementA, elementB) {
        return elementA[1] - elementB[1];
    }
);

const mode = listArray[listArray.length - 1];

// challenge: transform this code into a function
// let x = 0;
// const newList = [];
// while ( x <= 12) {
//     newList.push(Number(prompt("insert new number to array")))
//     x += 1;
//     console.log(newList);
// }

const newList = [];
function mode(newList) {
    let x = 0;
    let y = Number(prompt("insert length of array"));
    while ( x <= (y - 1) ) {
        newList.push(Number(prompt("insert new number to array")))
        x += 1;
        console.log(newList);
    }

    const listObject = {};

    newList.map(
        function (element) {
            if (listObject[element]) {
                listObject[element] += 1;
            }
            else { 
                listObject[element] = 1;
            }
        }
    );
    // "Object.entries" es una función que transforma objetos en arrays 
    const listArray = Object.entries(listObject).sort(
        function (elementA, elementB) {
            return elementA[1] - elementB[1];
        }
    );

    const mode = listArray[listArray.length - 1];
    return mode;

}

mode(newList);

//challenge: find geometric average

const geoValues = [];
function geometricAverage(geoValues) {
    let y = Number(prompt("insert length of array"));
    let x = 0;
    while (x <= (y -1) ) {
        geoValues.push(Number(prompt("insert number")));
        x += 1;
        console.log(geoValues);
    }

    const valuesTotal = geoValues.reduce( function(previous = geoValues[0], current) {
        const sequence = previous * current;
        return sequence
    });

    const geometricV = Math.pow(valuesTotal, 1 / y);

    return Math.round(geometricV);

}
geometricAverage(geoValues);
