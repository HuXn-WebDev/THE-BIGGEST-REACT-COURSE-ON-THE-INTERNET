export const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
export const findMax = (arr) => Math.max(...arr);
export const findMin = (arr) => Math.min(...arr);
export const filterEven = (arr) => arr.filter((num) => num % 2 === 0);
