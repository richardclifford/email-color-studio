import styles from "./CtaTextColorToggle.module.css";

export default function CtaTextColorToggle() {
  return (
    <div className={styles.ctaTextContainer}>
      <label>Text</label>
      <fieldset style={{ display: "flex", gap: "8px" }}>
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
