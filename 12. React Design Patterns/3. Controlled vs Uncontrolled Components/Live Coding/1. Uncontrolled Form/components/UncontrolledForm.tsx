import { useRef, FormEvent } from "react";

const UncontrolledForm = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const ageInput = useRef<HTMLInputElement>(null);
  const hairColorInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (nameInput.current && ageInput.current && hairColorInput.current) {
      console.log(nameInput.current.value);
      console.log(ageInput.current.value);
      console.log(hairColorInput.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border"
        type="text"
        name="name"
        placeholder="Name"
        ref={nameInput}
      />
      <input
        className="border"
        type="number"
        name="age"
        placeholder="Age"
        ref={ageInput}
      />
      <input
        className="border"
        type="text"
        name="hairColor"
        placeholder="Hair Color"
        ref={hairColorInput}
      />
      <input type="submit" name="submit" placeholder="Submit" />
    </form>
  );
};

export default UncontrolledForm;
