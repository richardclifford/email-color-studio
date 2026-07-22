import styles from "./BodyCopyColorToggle.module.css";

export default function BodyCopyColorToggle() {
  return (
    <div className={styles.bodyColorContainer}>
      <label>Hero Body Copy</label>
      <fieldset style={{ display: "flex", gap: "6px" }}>
        <label className={`${styles.inputToggle} ${styles.inputToggleActive}`}>
          <input type="radio" name="colorScheme" value="light" />
          Light
        </label>
        <label className={styles.inputToggle}>
          <input type="radio" name="colorScheme" value="dark" /> Dark
        </label>
      </fieldset>
    </div>
  );
}
