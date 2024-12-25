export const flattenArray = (arr) => {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
};

export const intersectArrays = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};

export const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
