import "./styles.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  primary?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: "small" | "medium" | "large";
  color?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  ariaLabel?: string;
}

const Button = ({
  label,
  onClick,
  primary = false,
  loading = false,
  size = "medium",
  color,
  fullWidth = false,
  icon,
  iconPosition,
  ariaLabel,
}: ButtonProps) => {
  // Conditional classes based on props
  const buttonClass = `
    button
    ${primary ? "button--primary" : "button--secondary"}
    ${size ? `button--${size}` : "button--medium"}
    ${color ? `button--custom-color` : ""}
    ${fullWidth ? "button--fullwidth" : ""}
    ${loading ? "button--loading" : ""}
  `;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      aria-label={ariaLabel}
      style={color ? { backgroundColor: color, color: "white" } : {}}
    >
      {loading && <span className="button__loading-spinner">Loading...</span>}
      {icon && iconPosition === "left" && (
        <span className="button__icon">{icon}</span>
      )}
      <span className="button__label">{label}</span>
      {icon && iconPosition === "right" && (
        <span className="button__icon">{icon}</span>
      )}
    </button>
  );
};

export default Button;
