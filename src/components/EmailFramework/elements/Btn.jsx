import styles from "../EmailFramework.module.scss";

export default function Btn({ type = "secondary", label, bgColor, textColor }) {
  const btnClass = styles[`${type}`];

  return (
    <button
      className={`${styles.btn} ${btnClass} ${styles[textColor]}`}
      style={{ backgroundColor: bgColor }}
    >
      {label ? label : "Lorem"}
    </button>
  );
}
