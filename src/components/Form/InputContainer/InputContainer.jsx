import styles from "./InputContainer.module.scss";

export default function InputContainer({ children, hasPadding }) {
  return (
    <div
      className={`${styles.inputContainer} ${hasPadding ? styles.paddingPrimary : ""} flex flex-row wrap`}
    >
      {children}
    </div>
  );
}
