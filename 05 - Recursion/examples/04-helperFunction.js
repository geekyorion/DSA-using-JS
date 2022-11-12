// this program is just a format for helper function
// and contains errors

const outerFunction = (...args) => {
    const outerLevelScopedVariable = [];

    const helperFunction = (...helperArguments) => {
        // base case with return
        if (/* some condition */) return /* a value or terminate */;
        
        // helper function calls itself and can modify the outer level scoped variables
        outerLevelScopedVariable.push(/* something */);

        // calls helper function again with different input
        const modifiedArgs = args /* modify args for new call */
        helperFunction(...modifiedArgs /* different every time */ );
    };

    const ans = helperFunction(...args);

    // can return the ans or outerLevelScopedVariable
    // return ans;
    return outerLevelScopedVariable;
};

outerFunction(/* some arguments */);
