export const isValidStringLength = (str) => {
  if (str.length < 5 || str.length > 10) {
    throw new Error("String length must be between 5 and 10 characters.");
  }
  return "String is valid!";
};
