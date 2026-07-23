import BodyCopyColorToggle from "../BodyCopyColorToggle/BodyCopyColorToggle";
import ColorInput from "../ColorInput/ColorInput";
import CtaTextColorToggle from "../CtaTextColorToggle/CtaTextColorToggle";
import styles from "./StyleContainers.module.css";

export default function HeroStyleContainer({ label, value, onValueChange }) {
  const textColorKey = Object.keys(value).find((key) =>
    key.includes("BodyTextColor"),
  );
  const textColorValue = value[textColorKey];
  // const secondaryCtaTextColorKey = Object.keys(value).find((key) =>
  //   key.includes("econdaryCtaTextColor"),
  // );
  // const secondaryCtaTextColorValue = value[textColorKey];

  return (
    <fieldset className={`${styles.styleContainer} flex flex-col gap-16`}>
      <label className={styles.legend}>{label} Styles</label>
      <div className={styles.fieldsetRow}>
        <div className={styles.fieldsetColumn}>
          <label htmlFor="">{label} Card</label>
          <ColorInput
            name="bgColor"
            value={value.bgColor}
            onValueChange={onValueChange}
          />
        </div>
        <div className={styles.fieldsetColumn}>
          <ColorInput
            name="badgeColor"
            label={`${label} Badge`}
            value={value.badgeColor}
            onValueChange={onValueChange}
          />
        </div>
      </div>
      <div className={styles.fieldsetRow}>
        <div className={styles.fieldsetColumn}>
          <BodyCopyColorToggle
            label={label}
            name={textColorKey}
            selectedValue={textColorValue}
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
