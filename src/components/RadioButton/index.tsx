type RadioButtonProps = {
  id: string;
  value: string;
  checked: boolean;
  onChange?: () => void;
};
const RadioButton = (props: RadioButtonProps) => {
  const { id, value, checked, onChange } = props;
  return (
    <label htmlFor={id}>
      <input
        type='radio'
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {value}
    </label>
  );
};

export default RadioButton;
