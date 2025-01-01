interface ButtonProps {
  label: string;
  color?: string;
  onClick?: () => void;
}

const Button = ({ label, color, onClick }: ButtonProps) => {
  const buttonStyle = {
    backgroundColor: color || "blue",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
