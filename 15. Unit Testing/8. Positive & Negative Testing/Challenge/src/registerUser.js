export const registerUser = (username, password) => {
  if (typeof username !== "string" || username.length < 3) {
    throw new Error("Username must be a string with at least 3 characters");
  }

  if (typeof password !== "string" || password.length < 6) {
    throw new Error("Password must be a string with at least 6 characters");
  }

  return "Registration successful!";
};
