const Greeting = (props) => {
  // Take a timeOfDay prop (e.g., "morning", "afternoon", or "evening").
  // Use the ternary operator to conditionally display different greetings based on the time of day:
  // If timeOfDay is "morning", display: "Good morning!"
  // If timeOfDay is "afternoon", display: "Good afternoon!"
  // If timeOfDay is not provided, display: "Hello!"

  return props.timeOfDay === "morning" ? (
    <div>Good morning!</div>
  ) : (
    <div>Good afternoon!</div>
  );
};
export default Greeting;
