import InputContainer from "../InputContainer/InputContainer";
import styles from "./ColorInput.module.css";

export const ColorInput = ({ children, name, label, value, onValueChange }) => {
  return (
    <>
      <div className={`${styles.label} flex flex-col gap-1`}>
        {label && <label>{label}</label>}
        <InputContainer hasPadding={true}>
          <input
            type="color"
            name={name}
            value={value}
            onChange={onValueChange}
            className="colorInput"
          />
          <input
            type="text"
            name={name}
            value={value}
            onChange={onValueChange}
            maxLength={7}
            className={`${styles.textColorInput} flex-1`}
          />
          {children}
        </InputContainer>
      </div>
    </>
  );
};

export default ColorInput;
