const UserStatus = (props) => {
  // Use the && operator to display a message if the user is logged in:
  // If loggedIn is true, display: "Welcome back!"
  // If loggedIn is false, display nothing.

  if (props.loggedIn && props.isAdmin) {
    return <div>Welcome admin</div>;
  } else {
    return <div>Welcome user</div>;
  }
};

export default UserStatus;
