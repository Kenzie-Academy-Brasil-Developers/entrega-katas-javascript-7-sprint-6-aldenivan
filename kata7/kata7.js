function myCallbackMultyply(value) {

    return value * 2;
};

function myCallbackBoolean(value) {
    
    return value > 30;
}

function myCallbackAdition(value, valueTwo) {

    return value + valueTwo;
}

function myCallbackModificationArr(array, value, index) {

    console.log()
    return array[index] = value;
}

let myArr = [6, 8, 18, 32];
let myArrNumber = [2, 5, 9];
let myArrString = ['Fire', 'Air', 'Water'];
let myArrModification = [2, 6, 4, 6, 7, 8, 7, 9, 10]

function newForEach(array, callback) {

    for(let i = 0; i < array.length; i++) {

        let result = callback(array[i], i, array);
    }
}

let returnForEach = myArr.forEach(myCallbackMultyply);
let returnNewForEach = newForEach(myArr, myCallbackMultyply);



function newFill(array, value, initialValue, finishValue) {

    for(let i = 0; i < array.length; i++) {

        if(typeof initialValue === "number" && typeof finishValue === "number") {
            
            if(finishValue < 0 && initialValue < finishValue && i >= (array.length + initialValue) && i < (array.length + finishValue)) {

                myCallbackModificationArr(array ,value, i);
            }

            if(initialValue > 0 && finishValue > initialValue && i >= initialValue && i < finishValue) {
            
                myCallbackModificationArr(array ,value, i);
            }    
        }

        if(typeof initialValue === "number" && finishValue === undefined) {

            if(initialValue < 0 && i >= (array.length + initialValue) && i < finishValue) {
            
                myCallbackModificationArr(array ,value, i);
            }

            if(initialValue > 0 && i >= initialValue) {
            
                myCallbackModificationArr(array ,value, i);
            }
        }
    
        if(initialValue > 0 && finishValue < 0 && i < (array.length + finishValue) && i >= initialValue) {

            myCallbackModificationArr(array ,value, i);
        }       
    }

    return array;
}   

let returnFill = myArrModification.fill(6, -3, -1);
let returnNewFill = newFill(myArrModification, 8, -3, -1);



function newMap(array, callback) {
    
    let newArray = []

    for(let i = 0; i < array.length; i++) {
        
        let result = callback(array[i], i, array);
        
        newArray.push(result);
    }    

    return newArray;
}

let returnMap = myArr.map(myCallbackMultyply);
let returnNewMap = newMap(myArr, myCallbackMultyply);



function newSome(array, callback) {

    for(let i = 0; i < array.length; i++) {

        let result = callback(array[i], i, array);

        if(result) {
            return true;
        }
    }
    return false;
}

let returnSome = myArr.some(myCallbackBoolean);
let returnNewSome = newSome(myArr, myCallbackBoolean);



function newFind(array, callback) {

    for(let i = 0; i < array.length; i++) {

        let result = callback(array[i], i, array);

        if(result) {
            return array[i];
        }
    }
    return undefined;
}

let returnFind = myArr.find(myCallbackBoolean);
let returnNewFind = newFind(myArr, myCallbackBoolean);



function newFindIndex(array, callback) {

    for(let i = 0; i < array.length; i++) {

        let result = callback(array[i], i, array);

        if(result) {
            return i;
        }
    }
    return -1;
}

let returnFindIndex = myArr.findIndex(myCallbackBoolean);
let returnNewFindIndex = newFindIndex(myArr, myCallbackBoolean);



function newEvery(array, callback) {

    for(let i = 0; i < array.length; i++) {

        let result = callback(array[i], i, array);

        if(result === false) {
            return false;
        }
    }
    return true;
}

let returnEvery = myArr.every(myCallbackBoolean);
let returnNewEvery = newEvery(myArr, myCallbackBoolean);



function newFilter(array, callback) {

    let newArray = []

    for(let i = 0; i < array.length; i++) {

        let result = callback(array[i], i, array);

        if(result) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let returnFilter = myArr.filter(myCallbackBoolean);
let returnNewFilter = newFilter(myArr, myCallbackBoolean);



function newConcat(parameters) {

    let newArray = [];

    for(let i = 0; i < arguments.length; i++) {

        if(typeof arguments[i] === "object") {
            
            for(let j = 0; j < arguments[i].length; j++) {

                newArray.push(arguments[i][j]);
            }
        } 
        
        else {

            newArray.push(arguments[i])
        } 
    }

    return newArray;
}

let returnConcat = myArr.concat([2, 1, 6], 4, "a");
let returnNewConcat = newConcat(myArr, [2, 1, 6], 4, "a");
    


function newIncludes(array, element, index) {

    for(let i = 0; i < array.length; i++) {

        
        if(index > 0) {
            
            if(i === index) {
                
                if(array[i] === element) {
                    
                    return true;
                }
            }
        } else {

            if(array[i] === element) {
                return true;
            }
        }
    }

    return false;
}

let returnIncludes = myArr.includes(myCallbackBoolean);
let returnNewIncludes = newIncludes(myArr, myCallbackBoolean, 3);



function newIndexOf(array, value, index) {

    if(index === array.length || index > array.length) {
        return -1;
    }

    if(index < 0) {
        for(let i = (array.length + index); i < array.length; i++) {

            if(value === array[i]) {
                return i;
            }
        }
    } else {
        
        for(let i = 0; i < array.length; i++) {

            if(value === array[i]) {
                return i;
            }
        }

    }

    return -1;
}

let returnIndexOf = myArrNumber.indexOf(2, -3);
let returnNewIndexOf = newIndexOf(myArrNumber, 2, -3);



function newJoin(array, separetor) {
    
    let newString = "";

    if(separetor === undefined) {
        separetor = ",";
    }

    if(array === []) {
        return newString;
    }

    for(let i = 0; i < array.length; i++) {

        if(i === (array.length - 1)) {

            newString += array[i];
        } else {
            newString += array[i] + separetor;
        }
    }

    return newString;
}

let returnJoin = myArrString.join("-");
let returnNewJoin = newJoin(myArrString, "-");



function newReduce(array, callback) {

    let acumulador = 0;
    let result = 0;

    for(let i = 0; i < array.length; i++) {

       result += callback(acumulador, array[i], i, array);
    }

    return result;
}

let returnReduce = myArr.reduce((acc, item) => acc + item);
let returnNewReduce = newReduce(myArr, myCallbackAdition);