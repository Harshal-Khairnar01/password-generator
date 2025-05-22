const Button = ({ title, onclick, customClass }) => {
  return (
    <button
      className={customClass}
      onClick={() => {
        onclick();
      }}
    >
      {title}
    </button>
  );
};
export default Button;
