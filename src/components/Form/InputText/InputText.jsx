import InputContainer from "../InputContainer/InputContainer";
import styles from "./InputText.module.scss";

export default function InputText({ label, name, value, onValueChange }) {
  return (
    <>
      <label>{label}</label>
      <InputContainer>
        <input
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
