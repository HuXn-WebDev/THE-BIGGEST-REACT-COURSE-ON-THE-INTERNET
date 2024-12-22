import { useState } from "react";

type Validator = (value: string) => string | undefined;

interface UseFormProps {
  initialValues: { [key: string]: string };
  validate: { [key: string]: Validator };
}

const useForm = ({ initialValues, validate }: UseFormProps) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: { [key: string]: string | undefined } = {};

    for (const field in validate) {
      const error = validate[field](values[field]);
      if (error) {
        isValid = false;
        newErrors[field] = error;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (callback: () => void) => (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      callback();
    }
  };

  return { values, errors, handleChange, handleSubmit, submitted };
};

export default useForm;
