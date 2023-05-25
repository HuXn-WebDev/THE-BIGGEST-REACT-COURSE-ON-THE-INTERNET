const ComponentOne = ({ count, onClickHandler }) => {
  const handleClick = () => {
    onClickHandler();
  };

  return (
    <section>
      <p>{count}</p>
      <button onClick={handleClick}>increment</button>
    </section>
  );
};

export default ComponentOne;
