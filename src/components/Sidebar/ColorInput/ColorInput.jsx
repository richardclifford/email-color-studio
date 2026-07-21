import InputContainer from "../InputContainer/InputContainer";
import styles from "./ColorInput.module.css";

export const ColorInput = ({ value, onValueChange }) => {
  return (
    <label
      htmlFor="container-color"
      className={`${styles.label} flex flex-col gap-1`}
    >
      Email BG
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
          className={styles.textColorInput}
        />
      </InputContainer>
    </label>
  );
};

export default ColorInput;
