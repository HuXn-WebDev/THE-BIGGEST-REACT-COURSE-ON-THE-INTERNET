function validateDate(date) {
  const currentDate = new Date();
  const inputDate = new Date(date);

  // Calculate the lower and upper boundaries
  const lowerBoundary = new Date(currentDate);
  lowerBoundary.setDate(currentDate.getDate() - 7);

  const upperBoundary = new Date(currentDate);
  upperBoundary.setDate(currentDate.getDate() + 30);

  // Check if the input date is within the allowed range
  if (inputDate < lowerBoundary || inputDate > upperBoundary) {
    throw new Error("Date is outside the allowed range.");
  }

  return "Date is valid!";
}
