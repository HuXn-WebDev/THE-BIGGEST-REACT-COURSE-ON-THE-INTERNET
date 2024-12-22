import { useState, useEffect } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | string>("");
  const [hairColor, setHairColor] = useState("");
  const [nameInputError, setNameInputError] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      setNameInputError("Name must be at least 2 characters or long");
    } else {
      setNameInputError("");
    }
  }, [name]);

  return (
    <form>
      {nameInputError && <p className="text-red-500">{nameInputError}</p>}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border m-2"
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        className="border m-2"
      />
      <input
        type="text"
        name="hairColor"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
        className="border m-2"
      />

      <button>Submit</button>
    </form>
  );
};

export default ControlledForm;
