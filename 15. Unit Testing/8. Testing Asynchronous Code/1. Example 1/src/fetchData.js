// Imagine we have an asynchronous function fetchData() that simulates an API request and returns a promise

export const fetchData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 1000);
  });
};
