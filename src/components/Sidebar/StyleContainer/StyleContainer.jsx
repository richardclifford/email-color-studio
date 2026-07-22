import BodyCopyColorToggle from "../BodyCopyColorToggle/BodyCopyColorToggle";
import ColorInput from "../ColorInput/ColorInput";
import CtaTextColorToggle from "../CtaTextColorToggle/CtaTextColorToggle";
import styles from "./StyleContainer.module.css";

export default function StyleContainer({ label, value, onValueChange }) {
  return (
    <fieldset className={`${styles.styleContainer} flex flex-col gap-16`}>
      {/* <legend>{label} Styles</legend> */}
      <label className={styles.legend}>{label} Styles</label>
      <div className={styles.fieldsetRow}>
        <div className={styles.fieldsetColumn}>
          <label htmlFor="">{label} Card</label>
          <ColorInput value={value} onValueChange={onValueChange} />
        </div>
        <div className={styles.fieldsetColumn}>
          <ColorInput
            label={`${label} Badge`}
            value={value}
            onValueChange={onValueChange}
          />
        </div>
      </div>
      <div className={styles.fieldsetRow}>
        <div className={styles.fieldsetColumn}>
          <BodyCopyColorToggle />
        </div>
        <div className={styles.fieldsetColumn}>
          <label htmlFor="">{label} Primary CTA</label>
          <ColorInput value={value} onValueChange={onValueChange}>
            <CtaTextColorToggle />
          </ColorInput>
        </div>
      </div>
      <div className={styles.fieldsetRow}>
        <div className={styles.fieldsetColumn}>
          <label htmlFor="">{label} Secondary CTA</label>
          <ColorInput value={value} onValueChange={onValueChange}>
            <CtaTextColorToggle />
          </ColorInput>
        </div>
        <div className={styles.fieldsetColumn}></div>
      </div>
    </fieldset>
  );
}
