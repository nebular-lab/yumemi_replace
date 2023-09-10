import styles from './checkbox.module.scss';
type CheckBoxProps = {
  label: string;
  isChecked: boolean;
  onChange?: () => void;
};
const CheckBox = (props: CheckBoxProps) => {
  const { label, onChange, isChecked } = props;
  return (
    <label className={styles.checkBoxContainer}>
      <input
        id={label}
        type='checkbox'
        checked={isChecked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};

export default CheckBox;
