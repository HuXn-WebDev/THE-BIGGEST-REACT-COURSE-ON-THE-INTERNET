import { useState } from "react";

const useForm = <T>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values);
  };

  return { values, handleChange, handleSubmit };
};

export default useForm;
