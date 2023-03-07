const operations = require('./operations.js');
const arguments = process.argv;

var result = "";
try {
    if (arguments.length < 5) {
        throw new Error("Atleast 2 numbers should be provided");
    }
    else {
        switch (arguments[2]) {
            case 'addition':
                const sum = operations.addition(arguments);
                result = `Sum is ${sum}`;

                break;

            case 'multiply':
                const product = operations.multiply(arguments);
                result = `Product is ${product}`;

                break;

            case 'subtraction':
                const difference = operations.subtraction(arguments);
                result = `Difference is : ${difference}`;

                break;

            case 'division':
                const quotient = operations.division(arguments);
                result = `Quotient is : ${quotient}`;
                break;

            default: result = "Please provide a valid arithmetic operation";
        }
        console.log(result);
    }    
}
catch (error) {
    console.log(error.message);
}
