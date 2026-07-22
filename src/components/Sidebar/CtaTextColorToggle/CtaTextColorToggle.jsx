import styles from "./CtaTextColorToggle.module.css";

export default function CtaTextColorToggle() {
  return (
    <div
      className={`${styles.ctaTextContainer} flex flex-1 flex-row align-center gap-1`}
    >
      <label>Text</label>
      <fieldset className="flex flex-1">
        <label className={`${styles.inputToggle} ${styles.inputToggleActive}`}>
          <input
            type="radio"
            name="colorScheme"
            value="light"
            className="hide"
          />
          Light
        </label>
        <label className={styles.inputToggle}>
          <input
            type="radio"
            name="colorScheme"
            value="dark"
            className="hide"
          />{" "}
          Dark
        </label>
      </fieldset>
    </div>
  );
}
