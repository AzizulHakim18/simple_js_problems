//1. Print all even numbers from 0 – 10
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


//2. Print a table containing multiplication tables

// Define the size of the table
const size = 10;

// Function to pad numbers for formatting
function pad(num, size) {
    let numString = num.toString();
    while (numString.length < size) {
        numString = " " + numString;
    }
    return numString;
}

// Print the multiplication table
for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 1; j <= size; j++) {
        row += pad(i * j, 4); // Adjust padding as needed
    }
    console.log(row);
}


// 3.Create a length converter function
function lengthConverter(length, fromUnit, toUnit) {
    // Define conversion factors
    const conversionFactors = {
        "mm": 1,
        "cm": 10,
        "m": 1000,
        "km": 1000000,
        "in": 25.4,
        "ft": 304.8,
        "yd": 914.4,
        "mi": 1609344
    };

    // Check if units are valid
    if (!conversionFactors.hasOwnProperty(fromUnit) || !conversionFactors.hasOwnProperty(toUnit)) {
        return "Invalid units";
    }

    // Convert length to millimeters
    const lengthInMillimeters = length * conversionFactors[fromUnit];

    // Convert length from millimeters to the desired unit
    const convertedLength = lengthInMillimeters / conversionFactors[toUnit];

    return convertedLength;
}

// Example usage
console.log(lengthConverter(5, "m", "mi")); // Converts 1 meter to centimeters
