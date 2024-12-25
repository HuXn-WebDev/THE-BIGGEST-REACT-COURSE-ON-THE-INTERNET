// Let’s say we have a function fetchUserData() that fetches user data but throws an error if the user is not found.

export const fetchUserData = async (userId) => {
  if (userId === "invalid") {
    return Promise.reject("User not found");
  }

  return Promise.resolve({ id: userId, name: "John Doe" });
};
