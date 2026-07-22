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
          <ColorInput
            name="bg"
            value={value.bg}
            onValueChange={onValueChange}
          />
        </div>
        <div className={styles.fieldsetColumn}>
          <ColorInput
            name="badge"
            label={`${label} Badge`}
            value={value.badge}
            onValueChange={onValueChange}
          />
        </div>
      </div>
      <div className={styles.fieldsetRow}>
        <div className={styles.fieldsetColumn}>
          <BodyCopyColorToggle
            label={label}
            name="textColor"
            selectedValue={value.textColor}
            handleChange={onValueChange}
          />
        </div>
        <div className={styles.fieldsetColumn}>
          <label htmlFor="">{label} Primary CTA</label>
          <ColorInput
            name="primaryCtaBgColor"
            value={value.primaryCtaBgColor}
            onValueChange={onValueChange}
          >
            <CtaTextColorToggle
              name="primaryCtaTextColor"
              selectedValue={value.primaryCtaTextColor}
              handleChange={onValueChange}
            />
          </ColorInput>
        </div>
      </div>
      <div className={styles.fieldsetRow}>
        <div className={styles.fieldsetColumn}>
          <label htmlFor="">{label} Secondary CTA</label>
          <ColorInput
            name="secondaryCtaBgColor"
            value={value.secondaryCtaBgColor}
            onValueChange={onValueChange}
          >
            <CtaTextColorToggle
              name="secondaryCtaTextColor"
              selectedValue={value.secondaryCtaTextColor}
              handleChange={onValueChange}
            />
          </ColorInput>
        </div>
        <div className={styles.fieldsetColumn}></div>
      </div>
    </fieldset>
  );
}
