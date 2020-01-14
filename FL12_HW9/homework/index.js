const convert = function() {
    let arrConvert = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            arrConvert.push(parseInt(arguments[i]));
        } else if (typeof arguments[i] === 'number') {
            arrConvert.push(`${arguments[i]}`);
        }
    }
    return arrConvert;
};

const executeforEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
};

const mapArray = (arr, func) => {
    let arrTransform = [];
    executeforEach(arr, function(el) {
        arrTransform.push(func(el));
    });
    return arrTransform;
};

const filterArray = (arr, func) => {
    let arrFiltered = [];
    executeforEach(arr, function(el) {
        if (func(el)) {
            arrFiltered.push(el);
        }
    });
    return arrFiltered;
};

const flipOver = str => {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString
};

const makeListFromRange = numbers => {
    const listRange = [];
    for (let i = numbers[0]; i <= numbers[1]; i++) {
        listRange.push(i)
    }
    return listRange;
};

const actors = [
    {name: 'tommy', age: 36},
    {name: 'lee', age: 28}
];
const getArrayOfKeys = (arrName, arrKey) => {
    const arrActors = [];
    executeforEach(arrName, (el) => arrActors.push(el[arrKey]));
    return arrActors;
};

const substitute = arr => {
    const maxNumber = 30;
    return mapArray(arr, function(el) {
        if (el < maxNumber) {
            return '*';
        } else {
            return el;
        }
    });
};

const getPastDay = (date, daysAgo) => {
    const mlSecs = 86400000;
    return new Date(date.getTime() - daysAgo * mlSecs).getDate();
};

const formatDate = date => {
    const newData = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
    };
    return `${newData.year}/${newData.month}/${newData.day}`
};





