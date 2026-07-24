import InputContainer from "../InputContainer/InputContainer";
import styles from "./InputColor.module.scss";

export const ColorInput = ({
  children,
  name,
  label,
  id,
  value,
  onValueChange,
}) => {
  return (
    <>
      <div className=" flex flex-col gap-1">
        {label && <label htmlFor={id}>{label}</label>}
        <InputContainer hasPadding={true}>
          <input
            id={id}
            type="color"
            name={name}
            value={value}
            onChange={onValueChange}
            className="colorInput"
          />
          <input
            id={id}
            type="text"
            name={name}
            value={value}
            onChange={onValueChange}
            maxLength={7}
            className={`${styles.inputTextColor} flex-1`}
          />
          {children}
        </InputContainer>
      </div>
    </>
  );
};

export default ColorInput;
