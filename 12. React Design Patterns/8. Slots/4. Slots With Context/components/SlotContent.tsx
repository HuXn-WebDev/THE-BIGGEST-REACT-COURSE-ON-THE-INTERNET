import { useMyContext } from "../hooks/useMyContext";

export const SlotContent = () => {
  const { setValue } = useMyContext();

  return (
    <button onClick={() => setValue("New Value from SlotContent")}>
      Update Context Value
    </button>
  );
};
