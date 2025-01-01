interface ButtonProps {
  label: string;
  backgroundColor: string;
  size: "small" | "medium" | "large";
  borderRadius: number;
  fontSize: string;
  textColor: string;
}

const Button = ({
  label,
  backgroundColor,
  size,
  borderRadius,
  fontSize,
  textColor,
}: ButtonProps) => {
  const sizeStyles = {
    small: "5px 10px",
    medium: "10px 20px",
    large: "15px 30px",
  };

  return (
    <button
      style={{
        backgroundColor,
        padding: sizeStyles[size],
        borderRadius: `${borderRadius}px`,
        fontSize: fontSize,
        color: textColor,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
