import DangerButton from "../components/DangerButton";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const ButtonFactory = (type: string, label: string) => {
  switch (type) {
    case "primary":
      return <PrimaryButton label={label} />;
    case "secondary":
      return <SecondaryButton label={label} />;
    case "danger":
      return <DangerButton label={label} />;
    default:
      return <button>{label}</button>;
  }
};

export default ButtonFactory;
