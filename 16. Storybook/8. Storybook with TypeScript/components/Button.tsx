export interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: string;
  disabled?: boolean;
}

export const Button = ({
  label,
  onClick,
  color = "#007bff",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
      }}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
