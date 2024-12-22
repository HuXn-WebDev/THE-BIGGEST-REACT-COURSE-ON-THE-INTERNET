import useForm from "../hooks/useForm";

const validateEmail: (value: string) => string | undefined = (value) => {
  if (!value) return "Email is required";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(value)) return "Email is invalid";
};

const validateName: (value: string) => string | undefined = (value) => {
  if (!value) return "Name is required";
  if (value.length < 2) return "Name must be at least 2 characters long";
};

const MyForm = () => {
  const { values, errors, handleChange, handleSubmit, submitted } = useForm({
    initialValues: { name: "", email: "" },
    validate: {
      name: validateName,
      email: validateEmail,
    },
  });

  const onSubmit = () => {
    console.log("Submitted:", values);
  };

  return (
    <div>
      {submitted ? (
        <h2>Thank you for submitting your information!</h2>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </label>
            {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </label>
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default MyForm;
