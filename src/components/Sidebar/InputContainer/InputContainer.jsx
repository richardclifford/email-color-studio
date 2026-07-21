import styles from "./InputContainer.module.css";

export default function InputContainer({ children, hasPadding }) {
  return (
    <div
      className={`${styles.inputContainer} ${hasPadding ? styles.paddingPrimary : ""} flex flex-row`}
    >
      {children}
    </div>
  );
}
