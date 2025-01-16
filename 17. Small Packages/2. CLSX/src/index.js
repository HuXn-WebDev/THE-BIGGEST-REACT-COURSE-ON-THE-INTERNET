import clsx from "clsx";

// ----------------------------------
// Basic usage:
// You pass class names or conditional expressions (true/false) to clsx, and it returns a string of valid class names.
// const buttonClass = clsx("btn", "btn-primary"); // returns 'btn btn-primary'
// console.log(buttonClass);
// ----------------------------------

// ----------------------------------
// Conditional classes:
// You can pass expressions, and clsx will only include the class if the condition is true.
// const isPrimary = true;
// const primaryButtonClass = clsx("btn", isPrimary && "btn-primary"); // returns 'btn btn-primary'
// console.log(primaryButtonClass);

// const isDisabled = false;
// const disabledButtonClass = clsx("btn", isDisabled && "btn-disabled"); // returns 'btn'
// console.log(disabledButtonClass);
// ----------------------------------

// ----------------------------------
// Array In clsx:
// If an item is truthy, it will be included in the final class string.
// const isPrimary = true;
// const classes = clsx(["btn", "btn-primary", isPrimary && "active"]); // returns 'btn btn-primary active'
// console.log(classes);
// ----------------------------------

// ----------------------------------
// Object
// You can use an object where keys are class names, and values are booleans (true = include, false = exclude).
const isPrimary = true;
const isDisabled = false;

const classes = clsx({
  btn: true,
  "btn-primary": isPrimary,
  "btn-disabled": isDisabled,
}); // returns 'btn btn-primary' if isPrimary is true and isDisabled is false

console.log(classes);
// ----------------------------------
