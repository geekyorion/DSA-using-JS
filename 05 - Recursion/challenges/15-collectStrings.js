// Write a function called collectStrings which accepts an object
// and returns an array of all the values in the object that have a typeof string

const collectStrings = obj => {
    const strings = [];
    for (let key in obj) {
        const currentValue = obj[key];
        if (typeof currentValue === 'object') {
            strings.push(...collectStrings(currentValue));
        } else {
            if (typeof currentValue === 'string') {
                strings.push(currentValue);
            }
        }
    }
    return strings;
};

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};

collectStrings(obj);    // ["foo", "bar", "baz"]
