function checkUserName(userName) {
    if (typeof userName !== "string") throw new TypeError("Username must be a string.");
    if (userName.trim().length === 0) throw new Error("Username cannot be empty.");
    if (userName.length > 20) throw new RangeError("Username is to long, max 20 characters.");
    return `Welcome, ${userName.trim()}!`;
} 

function demoErrors(input) {
    if (input === null) throw new ReferenceError("Input is missing cannot process null.");
    if (typeof input !== "number") throw new TypeError("Input should be a number.");
    if (input < 0) throw new RangeError("Input cannot be negative.");
    return `Your number ${input} is valid and positive.`
}

const stringHelpers = {
    makeUpperCase: (text) => {
        if (typeof text !== "string") throw new TypeError("Cannot convert to uppercase.");
        return text.toUpperCase();
    },
    makeLowerCase: (text) => {
        if (typeof text !== "string") throw new TypeError("Convert to lowercase.");
        return text.toLowerCase();
    },
    reverseText: (text) => {
        if (typeof text !== "string") throw new TypeError("Cannot reverse")
            return text.split(" ").reverse().join();
    },
    capilatizeWords: (text) => {
        if (typeof text !== "string") throw new TypeError("Cannot capitalize");
        return text
            .split("")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }
};

const arrayHelpers = {
    sumNumbers: (numbers) => {
        if (!Array.isArray(numbers)) throw new TypeError("Input should be an array of numbers.");
        if (!numbers.every(n => typeof n === "number")) throw new TypeError("All elements must be a number");
        return numbers.reduce((total, n) => total + n, 0);
    },
    findLargest: (number) => {
        if (!Array.isArray(array)) throw new TypeError("Input should be an array of numbers");
        return Math.max(...numbers);
    },
    removeDuplicate: (array) => {
        if (!Array.isArray(array)) throw new TypeError("Input should be an array");
        return [...new Set(array)];
    },
    flattenArray: (nestedArray) => {
        if (!Array.isArray(nestedArray)) throw new TypeError("Input should be an array");
        return nestedArray.flat(Infinity);
    }
};

try {
    console.log(checkUserName("Imtiyaaz"));
    console.log(demoErrors(42));
    console.log(stringHelpers.capilatizeWords("whats up"));
    console.log(arrayHelpers.sumNumbers([1, 2, 3, 4, 5]));
    console.log(arrayHelpers.removeDuplicate([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
} catch (error) {
    console.error("Something went wrong:", error.message);
}