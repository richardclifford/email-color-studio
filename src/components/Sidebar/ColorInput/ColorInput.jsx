import InputContainer from "../InputContainer/InputContainer";
import styles from "./ColorInput.module.css";

export const ColorInput = ({
  children,
  isInputSolo,
  label,
  value,
  onValueChange,
}) => {
  return (
    <label
      htmlFor="container-color"
      className={`${styles.label} ${isInputSolo ? styles.headline : ""} flex flex-col gap-1`}
    >
      {label}
      <InputContainer hasPadding={true}>
        <input
          type="color"
          name="container"
          value={value}
          onChange={onValueChange}
          className="colorInput"
        />
        <input
          type="text"
          name="container"
          value={value}
          onChange={onValueChange}
          maxLength={7}
          className={`${styles.textColorInput} flex-1`}
        />
        {children}
      </InputContainer>
    </label>
  );
};

export default ColorInput;
