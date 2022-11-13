// Write a function called stringifyNumbers which takes in an object and
// finds all of the values which are numbers and converts them to strings.
// It should not modify the current object.

const stringifyNumbers = obj => {
    const newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        const currentValue = obj[key];
        if (typeof currentValue === 'object') {
            newObj[key] = stringifyNumbers(currentValue);
        } else {
            if (typeof currentValue === 'number') {
                newObj[key] = currentValue.toString();
            } else {
                newObj[key] = currentValue;
            }
        }
    }
    return newObj;
};

const obj = {
    num: 1,
    test: [{
        name: 'geekyorion',
        roll: 12
    }],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

stringifyNumbers(obj);

/*
output: {
    num: '1',
    test: [{
        name: 'geekyorion',
        roll: '12'
    }],
    data: {
        val: '4',
        info: {
            isRight: true,
            random: '66'
        }
    }
}
*/
