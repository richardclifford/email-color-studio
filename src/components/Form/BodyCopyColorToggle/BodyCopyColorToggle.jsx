import styles from "./BodyCopyColorToggle.module.scss";

export default function BodyCopyColorToggle({
  // id,
  label,
  name,
  selectedValue,
  handleChange,
}) {
  return (
    <fieldset className={`${styles.bodyColorContainer} flex flex-col gap-8`}>
      <legend>{label}</legend>
      <div className="flex gap-6">
        <label className={`${styles.inputToggle} flex-1 brdr-radius-main`}>
          <input
            type="radio"
            id={`${name}-light`}
            name={name}
            value="light"
            checked={selectedValue === "light"}
            onChange={handleChange}
            className="hide"
          />
          Light
        </label>
        <label className={`${styles.inputToggle} flex-1 brdr-radius-main`}>
          <input
            type="radio"
            id={`${name}-dark`}
            name={name}
            value="dark"
            checked={selectedValue === "dark"}
            onChange={handleChange}
            className="hide"
          />
          Dark
        </label>
      </div>
    </fieldset>
  );
}
