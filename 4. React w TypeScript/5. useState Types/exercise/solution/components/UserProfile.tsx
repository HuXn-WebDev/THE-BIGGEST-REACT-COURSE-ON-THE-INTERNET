import { useState } from "react";

interface UserProfile {
  name: string;
  age: number;
  email: string;
}

const UserProfile = () => {
  // Define a state variable for user profile
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    age: 0,
    email: "",
  });

  const updateName = (name: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, name }));
  };

  const updateAge = (age: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, age: Number(age) }));
  };

  const updateEmail = (email: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, email }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={profile.age > 0 ? profile.age : ""}
        onChange={(e) => updateAge(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={profile.email}
        onChange={(e) => updateEmail(e.target.value)}
      />
      <h3>Profile Summary:</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
};

export default UserProfile;
