const CheckBox = ({ title, state, onChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => onChange()}
        checked={state}
        className="custom-checkbox"
      />
      <label className={state ? "checked" : ""}>{title}</label>
    </div>
  );
};

export default CheckBox;
