import { useRef } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subscribe: boolean;
  message: string;
}

function UncontrolledForm() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subscribeRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormData = {
      firstName: firstNameRef.current?.value ?? "",
      lastName: lastNameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      subscribe: subscribeRef.current?.checked ?? false,
      message: messageRef.current?.value ?? "",
    };

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={firstNameRef} type="text" placeholder="First Name" />
      <input ref={lastNameRef} type="text" placeholder="Last Name" />
      <input ref={emailRef} type="email" placeholder="Email" />
      <label>
        <input ref={subscribeRef} type="checkbox" />
        Subscribe to Newsletter
      </label>
      <textarea ref={messageRef} placeholder="Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
