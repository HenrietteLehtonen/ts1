'use strict';

// import greeting from "./functions/greeting";
// Create an empty array named 'cart' to store the items
const cart = [];
// TODO: Implement a loop to prompt the user for item details
// Use 'while' loop to keep prompting until an empty item name is entered
while (true) {
    // TODO: Prompt user for item name, price, and quantity
    const itemName = prompt("Anna tuote: ");
    // Break the loop if an empty item name is entered (itemName === "" || tai null)
    if (!itemName) {
        break;
    }
    // näihin Number -> kysytään lukuja
    const itemPrice = Number(prompt("Anna tuotteen hinta: ") || "0");
    const itemQuantity = Number(prompt("Anna määrä: ") || "0");
    // Create an item object and add it to the 'cart' array
    const newItem = {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity,
    };
    cart.push(newItem);
}
// Calculate the total cost using the 'map' and 'reduce' functions
const totalCost = cart
    .map((item) => item.price * item.quantity)
    .reduce((sum, cost) => sum + cost, 0);
// Display the total cost to the user
console.log("t1");
console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
console.log("");
console.log("t2");
// TODO: Implement the squareRoot function
// parameter num should be a number or null or undefined and the function shoud return a number or a string
function squareRoot(num) {
    // TODO: Check if the input is undefined or null. If fail, return 'Input is undefined or null.'
    if (!numberInput) {
        return `Input is undefined or null.`;
    }
    // TODO: Check if the input is a valid number. If fail, return 'Invalid input. Please enter a valid number.'
    if (isNaN(numberInput)) {
        return `Invalid input. Please enter a valid number.`;
    }
    // TODO: Handle cases where the input is negative. If fail, return 'Cannot calculate square root of a negative number.'
    if (numberInput < 0) {
        return `Cannot calculate square root of a negative number.`;
    }
    // Calculate the square root and return the result
    const sqrt = Math.sqrt(num);
    return sqrt;
}
// Prompt the user to enter a number
const userInput = prompt("Anna numero");
// Convert user input to a number or keep it undefined if empty
// TODO: replce x and y with proper types
const numberInput = userInput
    ? parseFloat(userInput)
    : undefined;
// Call the squareRoot function and display the result
const result = squareRoot(numberInput);
console.log(result);
console.log("");
console.log("t3");
// TODO: Implement the promptForBook function
function promptForBook() {
    // TODO: Prompt user for book details (title, author, publication year)
    const bookTitle = String(prompt("Anna kirjan nimi:")); /* TODO: Get user input for title */
    const bookAuthor = String(prompt("Anna kirjailija:")); /* TODO: Get user input for author */
    const bookPublicationYear = Number(prompt("Anna julkaisuvuosi:")); /* TODO: Get user input for publication year */
    // TODO: Create an object of type 'Book' with the entered values
    const book = {
        title: bookTitle,
        author: bookAuthor,
        publicationYear: bookPublicationYear,
    }; /* TODO: Create the Book object */
    return book;
}
// TODO: Call the promptForBook function to get the book details
const bookDetails = promptForBook();
// TODO: Display the details of the book object to the user
console.log("Book Details:");
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);
console.log(`Publication Year: ${bookDetails.publicationYear}`);
