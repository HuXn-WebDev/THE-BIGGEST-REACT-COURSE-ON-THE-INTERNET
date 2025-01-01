const Button = ({
  label = "Click Me",
  onClick = () => {},
  disabled = false,
  color = "#007bff",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: color,
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
