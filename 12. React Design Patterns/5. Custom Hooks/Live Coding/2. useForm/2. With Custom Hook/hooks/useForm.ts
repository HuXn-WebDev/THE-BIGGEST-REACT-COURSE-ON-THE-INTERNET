import { useState } from "react";

const useForm = (initialValues: { [key: string]: string }) => {
  const [values, setValues] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (callback: () => void) => (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    callback();
  };

  return { values, handleChange, handleSubmit, submitted };
};

export default useForm;
