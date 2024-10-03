const ProfileCard = () => {
  // Set the background color to light gray.
  // Set padding to 15px.
  // Set border radius to 8px.
  // Set text color to black.

  const styles = {
    backgroundColor: "lightgray",
    padding: "15px",
    borderRadius: "8px",
    color: "black",
  };

  return (
    <div style={styles}>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        voluptatem placeat incidunt animi debitis, officiis iure illo voluptatum
        itaque ratione!
      </p>
    </div>
  );
};

export default ProfileCard;
