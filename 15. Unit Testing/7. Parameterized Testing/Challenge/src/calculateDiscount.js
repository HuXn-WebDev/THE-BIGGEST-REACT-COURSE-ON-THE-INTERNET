function calculateDiscount(totalPrice, discountType) {
  if (totalPrice > 50) {
    return totalPrice - 5;
  } else if (totalPrice >= 30 && totalPrice <= 50) {
    return totalPrice - totalPrice * 0.1;
  }
  return totalPrice;
}
