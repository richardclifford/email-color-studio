import InputContainer from "../InputContainer/InputContainer";
import styles from "./InputText.module.scss";

export default function InputText({ label, name, value, onValueChange }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <InputContainer>
        <input
          id={name}
          type="text"
          placeholder="Text here..."
          name={name}
          className={styles.inputText}
          value={value}
          onChange={onValueChange}
          required
        />
      </InputContainer>
    </>
  );
}
