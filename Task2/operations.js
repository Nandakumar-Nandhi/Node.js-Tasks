
function checkMoreArgsError(arguments) {
    if (arguments.length > 5) {
        throw new Error("Only 2 numbers should be passed as parameters");
    }
}
function checkNumberError(number) {
    if (isNaN(number))
        throw new Error(`Given argument ${number} is not a number, Please provide valid input`);
}

module.exports.addition = arguments => {

    return arguments.slice(3).reduce((sum, current) => {
        checkNumberError(current);
        sum += Number(current);

        return sum;
    }, 0);
}

module.exports.subtraction = arguments => {
    checkMoreArgsError(arguments);
    checkNumberError(arguments[3]);
    checkNumberError(arguments[4]);
    return Number(arguments[3]) - Number(arguments[4]);

}

module.exports.multiply = arguments => {

    return arguments.slice(3).reduce((mul, current) => {
        checkNumberError(current);
        mul *= Number(current);

        return mul;
    }, 1);
}

module.exports.division = arguments => {
    checkMoreArgsError(arguments);
    checkNumberError(arguments[3]);
    checkNumberError(arguments[4]);
    return Number(arguments[3]) / Number(arguments[4]);

}
