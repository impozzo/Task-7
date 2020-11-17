
// write a function that takes the input string and reverses it
const stringToReverse = "This sentence needs to be reversed.";

function reverseThisString(stringToReverse) {

    console.log(stringToReverse.split('').reverse().join(''));
}

reverseThisString(stringToReverse);

//write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
const swapUpperLower = "This SenTence NeeDs To REVERSE the Case."

function swapCase(string) {

    const strArray = string.split('');
    let returnArray = [];
    strArray.forEach(element => {
        if (element == element.toUpperCase()) {
            returnArray.push(element.toLowerCase());
        } else {
            returnArray.push(element.toUpperCase());
        }
    });
    return returnArray.join('');
}

console.log(swapCase(swapUpperLower));

//convert array of numbers from farenheit to celcius
const farenheitArray = [212, 100, 68, 32, 0];

function toCelcius(conversionArray) {

    const celciusArray = conversionArray.map(function (n) {
        return ((n - 32) * 5) / 9;
    });
    return celciusArray;
}
console.log(toCelcius(farenheitArray));

//write a function that takes an input array and returns an array of booleans pass (>=75) or fail (<75)
const gradeArray = [95, 87, 74, 77, 22, 45, 99, 32, 75];

function passOrFail(array) {

    const tfArray = [];

    array.forEach(element => {

        if (element >= 75) {
            tfArray.push('Pass');
        } else {
            tfArray.push('Fail');
        }
    });

    return tfArray;
}

console.log(passOrFail(gradeArray));


//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
function germanNumbers() {
    const cardinalNumbers = [2, 3, 4, 5, 6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    const newArray = [];
    let tempString;
    for (i = 0; i < cardinalNumbers.length; i++) {
        tempString = `${cardinalNumbers[i]} is ${germanNumbers[i]}`;
        newArray.push(tempString);
    }
    return newArray;
}

console.log(germanNumbers());


// write code that returns an array of ONLY prime numbers that are in the array numbers
function returnPrimeNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const primeArray = [2]; // I put 2 in the array because I accept it is a prime 
    // number and 1 is not.
    let isPrime;

    for (let i = 2; i < numbers.length; i += 2) { // +=2 so we don't test even nyumbers that 
        // we know can not be prime

        for (let j = 0; j < primeArray.length; j++) {
            if (numbers[i] % primeArray[j] == 0) {
                isPrime = false;
                break;
            }
            else {
                isPrime = true;
            }
        }
        if (isPrime) {
            primeArray.push(numbers[i]);
        }

    }
    return primeArray;
}
console.log(returnPrimeNumbers());

// Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" 
function csc225Rules() {

    for (i = 0; i <= 100; i++) {

        if (i % 3 == 0 && i % 5 != 0) {
            console.log('CSC225 RULES');

        } else if (i % 3 != 0 && i % 5 == 0) {
            console.log('I LOVE JAVASCRIPT');
        } else if (i % 3 == 0 && i % 5 == 0) {
            console.log('CSC225 RULES I LOVE JAVASCRIPT');
        } else {
            console.log(i);
        }

    }

}

csc225Rules(); // call the function
