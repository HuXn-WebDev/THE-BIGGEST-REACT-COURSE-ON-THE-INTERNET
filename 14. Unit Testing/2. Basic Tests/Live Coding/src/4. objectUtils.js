// Function to get a property by path (e.g., 'user.name')
export const getProperty = (obj, path) => {
  const keys = path.split(".");
  let result = obj;
  for (const key of keys) {
    if (result && key in result) {
      result = result[key];
    }
    return undefined;
  }
  return result;
};

// Function to merge two objects
export const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// Function to deeply clone an object
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

// Function to check if two objects are equal (deep comparison)
export const deepEqual = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);
