import styles from "./CtaTextColorToggle.module.scss";

export default function CtaTextColorToggle({
  name,
  selectedValue,
  handleChange,
}) {
  return (
    <div
      className={`${styles.ctaTextContainer} flex flex-1 flex-row align-center gap-1`}
    >
      <label htmlFor={name}>Text</label>
      <fieldset className="flex flex-1 gap-1">
        <label
          className={`${styles.inputToggle} ${styles.inputToggleActive} flex-1`}
        >
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
        <label className={`${styles.inputToggle} flex-1`}>
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
