// const Button = (props: {
//   label: string;
//   onClick: () => void;
//   disabled: boolean;
// }) => {
//   return (
//     <div>
//       <button onClick={props.onClick} disabled={props.disabled}>
//         {props.label}
//       </button>
//     </div>
//   );
// };

// export default Button;

// Destructuring
const Button = ({
  label,
  onClick,
  disabled,
}: {
  label: string;
  onClick: () => void;
  disabled: boolean;
}) => {
  return (
    <div>
      <button onClick={onClick} disabled={disabled}>
        {label}
      </button>
    </div>
  );
};

export default Button;
