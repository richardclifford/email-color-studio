import styles from "./BodyCopyColorToggle.module.css";

export default function BodyCopyColorToggle({
  label,
  name,
  selectedValue,
  handleChange,
}) {
  return (
    <div className={styles.bodyColorContainer}>
      <label>{label}</label>
      <fieldset style={{ display: "flex", gap: "6px" }}>
        <label className={`${styles.inputToggle} ${styles.inputToggleActive}`}>
          <input
            type="radio"
            name={name}
            value="light"
            checked={selectedValue === "light"}
            onChange={handleChange}
            className="hide"
          />
          Light
        </label>
        <label className={styles.inputToggle}>
          <input
            type="radio"
            name={name}
            value="dark"
            checked={selectedValue === "dark"}
            onChange={handleChange}
            className="hide"
          />
          Dark
        </label>
      </fieldset>
    </div>
  );
}
